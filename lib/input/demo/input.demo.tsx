import InputExample1 from './input.example1';
import InputExample2 from './input.example2';
import InputExample3 from './input.example3';
import InputExample4 from './input.example4';
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
                <p className={"introduce"}>A standard input field.</p>
                <Demo code={require('!!raw-loader!./input.example1.tsx').default}>
                    <InputExample1/>
                </Demo>
            </Container>
            <h2>STATES</h2>
            <Container className={"wrapper"}>
                <h3>Focus and Disabled</h3>
                <p className={"introduce"}>Focus : An input field can show a user is currently interacting with it.</p>
                <p className={"introduce"}>Disabled : An input field can show that it is disabled.</p>
                <Demo code={require('!!raw-loader!./input.example2.tsx').default}>
                    <InputExample2/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Loading</h3>
                <p className={"introduce"}>An icon input field can show that it is currently loading data.</p>
                <Demo code={require('!!raw-loader!./input.example3.tsx').default}>
                    <InputExample3/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Success and Error</h3>
                <p className={"introduce"}>An input field can show that the data contains success or error.</p>
                <Demo code={require('!!raw-loader!./input.example4.tsx').default}>
                    <InputExample4/>
                </Demo>
            </Container>
            <h2>VARIATIONS</h2>
            <Container className={"wrapper"}>
                <h3>Icon</h3>
                <p className={"introduce"}>An input can be formatted with an icon.</p>
            </Container>
        </Fragment>
    )
};

export default InputDemo