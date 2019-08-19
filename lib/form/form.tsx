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
    fields: Array<{ name: string, label: string, input: { type: string } }>
    buttons: ReactFragment,
    errors: { [K: string]: string[] },
    onChange: (value: FormValue) => void,
    onSubmit: React.FormEventHandler<HTMLFormElement>
}

const Form: React.FunctionComponent<Props> = (props) => {
    const formData = props.value;
    const {
        className,
        fields,
        onSubmit,
        onChange,
        buttons,
        ...rest
    } = props;
    const Submit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.stopPropagation();
        onSubmit(e);
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
            <table>
                <tbody>
                {fields.map(field =>
                    <tr className="roue-form-tr"  key={field.name}>
                        <td className="roue-form-td">
                            <span>{field.label}</span>
                        </td>
                        <td className="roue-form-td">
                            <Input
                                type={field.input.type}
                                value={formData[field.name]}
                                onChange={(e) => onInputChange(field.name, e.target.value)}
                            />
                        </td>
                    </tr>
                )}
                <tr className="roue-form-tr" >
                    <td className="roue-form-td" />
                    <td className="roue-form-td" >{buttons}</td>
                </tr>
                </tbody>
            </table>
        </form>
    );
};

export default Form;