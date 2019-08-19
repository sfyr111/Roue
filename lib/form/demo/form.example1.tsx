import * as React from "react";
import Form, {FormValue} from "../form";
import {Fragment, useState} from "react";
import Button from "../../button/button";
import formValidator from "voler-validator-form"
const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '营业执照号码', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ]);
    const [errors] = useState({});
   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
       /* const rules = [
            {key: 'username', required: true},
            {key: 'username', minLength: 8, maxLength: 16},
            {key: 'username', pattern: /^[A-Za-z0-9]+$/},
            {key: 'password', required: true},
        ];
        //const errors = Validator(formData, rules);

        //console.log(errors);
        //if (noError(errors)) {
            // 没错
        //}

        */
       formValidator(formData,[{
            key:'username',required:true,max:10
       }],(e)=>console.log(e))
    };
    return (
        <Form
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

export default FormExample