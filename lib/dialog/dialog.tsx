import * as React from 'react';
import './dialog.scss';
import '../index.tsx'
import {Fragment, ReactElement} from 'react';
import * as ReactDom from 'react-dom'
import {scopedClassMaker} from "../classes";


interface Props {
    visible: boolean;
    buttons: Array<ReactElement>;
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
    const x = props.visible ?
        <Fragment>
            <div className={sc('mask')} onClick={closeMask}>
            </div>
            <div className={sc()}>
                <header className={sc('header')}>
                    提 醒！
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>
                <footer className={sc('footer')}>
                    {props.buttons.map((button, index) =>
                        React.cloneElement(button, {key: index})
                    )}
                </footer>
            </div>
        </Fragment> :
        null;
    return ReactDom.createPortal(x, document.body)
};
Dialog.defaultProps = {
    closeOnClickMask: false
};
export default Dialog 