import * as React from "react";
import Form, {FormValue} from "../form";
import {Fragment, useState} from "react";
import Button from "../../button/button";


const FormExample2: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: 'username:', input: {type: 'text'}},
        {name: 'password', label: 'password:', input: {type: 'password'}},
    ]);
    return (
        <Form
            value={formData}
            fields={fields}
            buttons={
                <Fragment>
                    <Button type="submit" primary>Login</Button>
                </Fragment>
            }
            onChange={(value) => setFormData(value)}
            onSubmit={()=>{}}
        />
    );
};

export default FormExample2;