import * as React from 'react';
import {HTMLAttributes, ReactFragment} from "react";
import {scopedClassMaker} from "../helper/classes";
import "./form.scss";
import Input from "../input/input";

const sc = scopedClassMaker("roue-form");

export interface FormValue {
    [K: string]: any
}

interface Props extends HTMLAttributes<HTMLFormElement> {
    value: FormValue
    fields: Array<{ name: string, label?: string, input: { type: string }, placeholder?: string }>
    buttons: ReactFragment,
    errors?: { [K: string]: string[] },
    onChange: (value: FormValue) => void,
    onSubmit?: React.FormEventHandler<HTMLFormElement>,
    errorsDisplayMode?: 'first' | 'all',
    inline?: boolean
}

const Form: React.FunctionComponent<Props> = (props) => {
    const formData = props.value;
    const {
        className,
        fields,
        onSubmit,
        onChange,
        buttons,
        errors,
        errorsDisplayMode,
        inline,
        ...rest
    } = props;
    const Submit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.stopPropagation();
        onSubmit && onSubmit(e);
    };
    const onInputChange = (name: string, value: string) => {
        const newFormValue = {...formData, [name]: value};
        onChange(newFormValue);
    };
    return (
        <form
            onSubmit={Submit}
            className={sc({"": true}, {extra: className})}
            {...rest}
        >
            <table className={"roue-form-table"}>
                <tbody className={inline ? "roue-form-tbody-inline" : "roue-form-tbody"}>
                {fields.map(field =>
                    <tr className={"roue-form-tr"} key={field.name}>
                        {field.label && <td className={"roue-form-td"}>
                            <span className={"roue-form-label"}>{field.label}</span>
                        </td>}
                        <td className={"roue-form-td"}>
                            <Input
                                type={field.input.type}
                                value={formData[field.name]}
                                placeholder={field.placeholder}
                                onChange={(e) => onInputChange(field.name, e.target.value)}
                            />
                            {errors && <div className={"roue-form-error"}>
                                {errors[field.name] ?
                                    (errorsDisplayMode === 'first' ?
                                        errors[field.name][0] :
                                        errors[field.name].join()) :
                                    <span>&nbsp;</span>}
                            </div>}
                        </td>
                    </tr>
                )}
                <tr className={"roue-form-tr"}>
                    {!inline &&
                    <td className={"roue-form-td"}/>}
                    <td className={"roue-form-td roue-form-buttons"}>{buttons}</td>
                </tr>
                </tbody>
            </table>
        </form>
    );
};

export default Form;