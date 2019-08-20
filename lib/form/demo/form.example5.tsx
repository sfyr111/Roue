import * as React from "react";
import Form, {FormValue} from "../form";
import {Fragment, useState} from "react";
import Button from "../../button/button";
import formValidator from "../validator";


const FormExample4: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: 'username:', input: {type: 'text'}},
        {name: 'password', label: 'password:', input: {type: 'password'}},
    ]);
    const [errors, setErrors] = useState({});
    const info = {
        required: "you need type in this box."
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            const rules = [
                {key: 'username', required: true},
                {key: 'username', pattern: {reg: /^[A-Za-z0-9]+$/, description: 'number or alphabet'}},
                {key: 'password', required: true},
            ];
            formValidator(formData, rules, (a) => setErrors(a), info);
        }
    ;
    return (
        <Form
            errorsDisplayMode={'first'}
            value={formData}
            fields={fields}
            buttons={
                <Fragment>
                    <Button type="submit" primary>Login</Button>
                </Fragment>
            }
            errors={errors}
            onChange={(value) => setFormData(value)}
            onSubmit={onSubmit}
        />
    );
};

export default FormExample4;