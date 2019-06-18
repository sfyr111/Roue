import * as React from 'react';
import {ButtonHTMLAttributes, useState} from "react";
import {scopedClassMaker} from "../helper/classes"
import "./button.scss"

const sc = scopedClassMaker("roue-button");

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    content?: string,
    primary?: boolean,
    secondary?: boolean
}

const Button: React.FunctionComponent<Props> = (props) => {
    const {className,
        primary,secondary,
        ...rest} = props;
    const [onPress, setPress] = useState(false);
    const x = () => {
        setPress(!onPress);
        setTimeout(() => {
            setPress(false)
        }, 300)
    };
    const classStates = {
        "": true,
        onPress: onPress,
        primary: primary ? primary : false,
        secondary: secondary ? secondary : false,
    }
    return (
        <button onClick={() => { x() }}
                className={
                    sc({
                        ...classStates
                        }, {extra: className}
                    )
                }
                {...rest}
        >
            {props.content}{props.children}
        </button>
    )
};

export default Button