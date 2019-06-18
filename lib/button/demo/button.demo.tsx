import ButtonExample1 from './button.example1';
import ButtonExample2 from './button.example2';
import ButtonExample3 from './button.example3';
import ButtonExample4 from './button.example4';
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
                <p className={"introduce"}>You can do the same using shorthands.</p>
                <Demo code={require('!!raw-loader!./button.example2.tsx').default}>
                    <ButtonExample2/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Emphasis</h3>
                <p className={"introduce"}>A button can be formatted to show different levels of emphasis.</p>
                <Demo code={require('!!raw-loader!./button.example3.tsx').default}>
                    <ButtonExample3/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Group</h3>
                <p className={"introduce"}>A button group can be less pronounced.</p>
                <Demo code={require('!!raw-loader!./button.example4.tsx').default}>
                    <ButtonExample4/>
                </Demo>
            </Container>
        </Fragment>
    )
};

export default ButtonDemo