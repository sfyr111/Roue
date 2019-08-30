import FormExample1 from './form.example1';
import FormExample2 from './form.example2';
import FormExample3 from './form.example3';
import FormExample4 from './form.example4';
import FormExample5 from './form.example5';
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
            <Container className={"wrapper"}>
                <h3>Login Form</h3>
                <p className={"introduce"}>Normal login form which can contain more elements.</p>
                <Demo code={require('!!raw-loader!./form.example2.tsx').default}>
                    <FormExample2/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Validator</h3>
                <p className={"introduce"}>You can use validator to check data.</p>
                <Demo code={require('!!raw-loader!./form.example4.tsx').default}>
                    <FormExample4/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Validator one error</h3>
                <p className={"introduce"}>You can set errorsDisplayMode first to show one error.</p>
                <Demo code={require('!!raw-loader!./form.example5.tsx').default}>
                    <FormExample5/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Async validator</h3>
                <p className={"introduce"}>Async validator </p>
                <Demo code={require('!!raw-loader!./form.example3.tsx').default}>
                    <FormExample3/>
                </Demo>
            </Container>
        </Fragment>
    )
};

export default FormDemo