import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
import "./input.scss";
import Icon from "../icon/icon";

const sc = scopedClassMaker("roue-input");

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    focus?: boolean,
    loading?: boolean,
    disabled?: boolean,
    error?: boolean,
    success?: boolean,
    iconLeft?: boolean,
}

const Input: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        focus, loading, disabled, error, success,
        iconLeft,
        ...rest
    } = props;
    const states = {
        focus: focus ? focus : false,
        loading: loading ? loading : false,
        disabled: disabled ? disabled : false,
        error: error ? error : false,
        success: success ? success : false,
    };

    const createIcon = (iconNames: string = "", className?: string) => <Icon name={iconNames} className={className}/>;

    return (
        <div className={'roue-input-wrapper'}>
            {(states.loading && iconLeft) ? createIcon("loading", "roue-input-iconLoading") : ""}
            <input type="text" disabled={states.disabled}
                   className={sc({...states}, {extra: ["roue-input", className ? className : ""].filter(Boolean).join(" ")})} {...rest} />
            {(states.loading && !iconLeft) ? createIcon("loading", "roue-input-iconLoading") : ""}
        </div>

    );
};

export default Input;