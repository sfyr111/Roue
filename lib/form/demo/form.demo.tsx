import FormExample1 from './form.example1';
import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Container from "../../container/container"
import "./form.demo.scss"

const FormDemo = () => {
    return (
        <Fragment>
            <h1>Form</h1>
            <p className={"introduce"}>Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox,
                radio, input, select, and etc.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Inline Login Form</h3>
                <p className={"introduce"}>inline login form is often used in navigation bar.</p>
                <Demo code={require('!!raw-loader!./form.example1.tsx').default}>
                    <FormExample1/>
                </Demo>
            </Container>
        </Fragment>
    )
};

export default FormDemo