import * as React from 'react';
import './dialog.scss';
import '../index.tsx'
import {Fragment, ReactElement, ReactNode} from 'react';
import * as ReactDom from 'react-dom'
import {scopedClassMaker} from "../helper/classes";
import Button from "../button/button";


interface Props {
    visible: boolean;
    header?: ReactElement | string,
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('roue-dialog');
const sc = scopedClass;


const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    };
    const closeMask: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            onClickClose(e)
        }
    };
    const result = props.visible ?
        <Fragment>
            <div className={sc('mask')} onClick={closeMask}>
            </div>
            <div className={sc("")}>
                <header className={sc('header')}>
                    {props.header}
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>

                {props.buttons && <footer className={sc('footer')}>
                    {props.buttons && props.buttons.map((button, index) =>
                        React.cloneElement(button, {key: index})
                    )}
                </footer>}
            </div>
        </Fragment> :
        null;
    return ReactDom.createPortal(result, document.body)
};
Dialog.defaultProps = {
    closeOnClickMask: true,
    header: "Alert"
};


const alert = (header: ReactElement | string = "Alert", content: string) => {
    const button = [<Button onClick={() => {
        close()
    }}>Ok</Button>];
    const close = modal(header, content, button,false)
};


const modal = (header: ReactElement | string="Modal", content: ReactNode, buttons?: Array<ReactElement>,closeMask?:boolean) => {
    const onClose = () => {
        ReactDom.render(React.cloneElement(component, {visible: false}), div);
        ReactDom.unmountComponentAtNode(div);
        div.remove();
    };
    const component =
        <Dialog
            visible={true}
            onClose={() => {
                onClose()
            }}
            closeOnClickMask={closeMask}
            buttons={buttons}
            header={header}
        >{content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDom.render(component, div);
    return onClose
};


const confirm = (header: ReactElement | string = "Confirm", content: string, yes: () => void, no: () => void) => {
    const onYes = () => {
        close();
        yes && yes();
    };
    const onNo = () => {
        close();
        no && no();
    };
    const buttons = [<Button className={"roue-dialog-button"} primary onClick={() => {
        onYes()
    }}>yes</Button>, <Button className={"roue-dialog-button"} secondary onClick={() => {
        onNo()
    }}> no</Button>]
    const close = modal(header, content, buttons,false)
};

export {alert, confirm, modal};
export default Dialog