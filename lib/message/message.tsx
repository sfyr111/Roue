import * as React from 'react';
import * as ReactDom from 'react-dom';
import './message.scss';
import Icon from '../icon/icon'
import {scopedClassMaker} from "../helper/classes";
import { ReactNode} from "react";


interface Props extends React.HTMLAttributes<HTMLElement> {
}

const scopedClass = scopedClassMaker('roue-message');
const sc = scopedClass;


const Message: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        ...rest
    } = props;
    return (
        <div
            className={sc({"": true}, {extra: className})}
            {...rest}
        >
            {props.children}
        </div>
    );
};
const creatWrapper = () => {
    const wrapper = document.createElement('div');
    wrapper.className = "roue-message-wrapper";
    document.body.append(wrapper);
    ReactDom.createPortal(wrapper, document.body);
    return wrapper
};
const wrapper = creatWrapper();
const result = (content: string | ReactNode, type?: string ) => {
    const component =
        <Message>
            {type?<Icon name={type}/>:""}
            {content}
        </Message>;
    const div = document.createElement("div");
    wrapper.append(div);
    ReactDom.render(component, div);
}
const message = {
    normal:(content: string | ReactNode) => {
        result(content)
    },
    success: (content: string | ReactNode) => {
        result(content, "success")
    },
    error: (content: string | ReactNode) => {
        result(content, "success")
    },
    info: (content: string | ReactNode) => {
        result(content, "success")
    },
    warn: (content: string | ReactNode) => {
        result(content, "success")
    },
    loading: (content: string | ReactNode) => {
        result(content, "success")
    }
};

export {message}