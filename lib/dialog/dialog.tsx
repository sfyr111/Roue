import * as React from 'react';
import './dialog.scss';
import '../index.tsx'
import {Fragment, ReactElement} from 'react';
import {scopedClassMaker} from "../classes";


interface Props {
    visible: boolean;
    buttons:Array<ReactElement>;
}

const scopedClass = scopedClassMaker('roue-dialog');
const sc = scopedClass;
const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className={sc('mask')}>
                </div>
                <div className={sc()}>
                    <header className={sc('header')}>
                        提 醒！
                    </header>
                    <main className={sc('main')}>
                        {props.children}
                    </main>
                    <footer className={sc('footer')}>
                        {props.buttons}
                    </footer>
                </div>
            </Fragment> :
            null
    )
};
export default Dialog