import * as React from 'react';
import * as ReactDom from 'react-dom';
import './message.scss';
import Icon from '../icon/icon'
import {scopedClassMaker} from "../helper/classes";
import {ReactNode} from "react";


interface Props extends React.HTMLAttributes<HTMLElement> {
    iconClass?: string,
    type?: string,
    visible?: boolean,
}

const scopedClass = scopedClassMaker('roue-message');
const sc = scopedClass;


const Message: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        iconClass,
        type,
        visible,
        ...rest
    } = props;
    return (visible ?
            <div
                className={sc({"": true}, {extra: className})}
                {...rest}
            >
                {type ? <Icon className={iconClass} name={type}/> : ""}
                {props.children}
            </div>
            : null
    );
};
Message.defaultProps = {
    visible: true
};



const creatWrapper = () => {
    const wrapper = document.createElement('div');
    wrapper.className = "roue-message-wrapper";
    document.body.append(wrapper);
    ReactDom.createPortal(wrapper, document.body);
    return wrapper
};
const wrapper = creatWrapper();




const result = (content: string | ReactNode, duration?: number, onClose?: () => void, type?: string, iconClass?: string) => {
    const Close = () => {
        ReactDom.render(React.cloneElement(component, {visible: false}), div);
        ReactDom.unmountComponentAtNode(div);
        div.remove();
        onClose && onClose()
    };
    const component =(
        <Message iconClass={iconClass} type={type}>
            {content}
        </Message>
    );

    const div = document.createElement("div");
    wrapper.append(div);
    ReactDom.render(component, div);

    setTimeout(() => {
        Close()
    }, duration || 3000)
};





const message = {
    normal: (content: string | ReactNode) => {
        result(content)
    },
    success: (content: string | ReactNode, duration?: number, onClose?: () => void) => {
        result(content, duration, onClose, "success")
    },
    error: (content: string | ReactNode, duration?: number, onClose?: () => void) => {
        result(content, duration, onClose, "error")
    },
    info: (content: string | ReactNode, duration?: number, onClose?: () => void) => {
        result(content, duration, onClose, "info")
    },
    warn: (content: string | ReactNode, duration?: number, onClose?: () => void) => {
        result(content, duration, onClose, "warn")
    },
    loading: (content: string | ReactNode, duration?: number, onClose?: () => void) => {
        result(content, duration, onClose, "loading", "roue-message-icon-loading")
    }
};



export {message}