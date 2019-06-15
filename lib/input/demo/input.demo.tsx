import InputExample1 from './input.example1';
import InputExample2 from './input.example2';
import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Container from "../../container/container"
import "./input.demo.scss"

const InputDemo = () => {
    return (
        <Fragment>
            <h1>Input</h1>
            <p className={"introduce"}>An Input is a field used to elicit a response from a user.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Normal</h3>
                <Demo code={require('!!raw-loader!./input.example1.tsx').default}>
                    <InputExample1/>
                </Demo>
            </Container>
            <h2>STATES</h2>
            <Container className={"wrapper"}>
                <h3>States</h3>
                <Demo code={require('!!raw-loader!./input.example2.tsx').default}>
                    <InputExample2/>
                </Demo>
            </Container>

        </Fragment>
    )
};

export default InputDemo