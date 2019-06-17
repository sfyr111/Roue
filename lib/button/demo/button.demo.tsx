import ButtonExample1 from './button.example1';
import ButtonExample2 from './button.example2';
import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Container from "../../container/container"
import "./button.demo.scss"

const ButtonDemo = () => {
    return (
        <Fragment>
            <h1>Button</h1>
            <p className={"introduce"}>A Button indicates a possible user action.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Button</h3>
                <p className={"introduce"}>A standard button.</p>
                <Demo code={require('!!raw-loader!./button.example1.tsx').default}>
                    <ButtonExample1/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Focus and Disabled</h3>
                <p className={"introduce"}>You can do the same using shorthands.</p>
                <Demo code={require('!!raw-loader!./button.example2.tsx').default}>
                    <ButtonExample2/>
                </Demo>
            </Container>

        </Fragment>
    )
};

export default ButtonDemo