import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Container from "../../container/container";
import "./switch.demo.scss";
import SwitchExample1 from "./switch.example1";

const SwitchDemo = () => {
    return (
        <Fragment>
            <h1>Switch</h1>
            <p className={"introduce"}>Switching Selector.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Basic</h3>
                <p className={"introduce"}>The most basic usage.</p>
                <Demo code={require('!!raw-loader!./switch.example1.tsx').default}>
                    <SwitchExample1/>
                </Demo>
            </Container>
        </Fragment>
    )
};

export default SwitchDemo