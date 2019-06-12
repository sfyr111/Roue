import * as React from 'react';
import './dialog.scss';
import '../index.tsx'
import {Fragment, ReactElement, ReactNode} from 'react';
import * as ReactDom from 'react-dom'
import {scopedClassMaker} from "../helper/classes";


interface Props {
    visible: boolean;
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
                    提 醒！
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
    closeOnClickMask: true
};


const alert = (content: string) => {
    const button = [<button onClick={() => {
        close()
    }}>Ok</button>];
    const close = modal(content, button)
};


const modal = (content: ReactNode, buttons?: Array<ReactElement>) => {
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
            closeOnClickMask={true}
            buttons={buttons}
        >{content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDom.render(component, div);
    return onClose
};


const confirm = (content: string, yes: () => void, no: () => void) => {
    const onYes = () => {
        close();
        yes && yes();
    };
    const onNo = () => {
        close();
        no && no();
    };
    const buttons = [<button onClick={() => {
        onYes()
    }}>yes</button>, <button onClick={() => {
        onNo()
    }}> no</button>]
    const close = modal(content, buttons)
};

export {alert, confirm, modal};
export default Dialog