import * as React from "react";
import Form, {FormValue} from "../form";
import {Fragment, useState} from "react";
import Button from "../../button/button";

const FormExample1: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', placeholder: 'username', input: {type: 'text'}},
        {name: 'password', placeholder: 'password', input: {type: 'password'}},
    ]);
    return (
        <Form
            style={{marginTop: '20px'}}
            inline
            value={formData}
            fields={fields}
            buttons={
                <Fragment>
                    <Button type="submit" primary>login</Button>
                </Fragment>
            }
            onChange={(value) => setFormData(value)}
        />
    );
};

export default FormExample1;