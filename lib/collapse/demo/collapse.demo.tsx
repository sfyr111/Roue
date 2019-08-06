import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Container from "../../container/container";
import "./collapse.demo.scss";
import CollapseExample1 from "./collapse.example1";
import CollapseExample2 from "./collapse.example2";
import CollapseExample3 from "./collapse.example3";
const CollapseDemo = () => {
    return (
        <Fragment>
            <h1>Collapse</h1>
            <p className={"introduce"}>A content area which can be collapsed and expanded.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Basic</h3>
                <p className={"introduce"}>basic collapse</p>
                <Demo code={require('!!raw-loader!./collapse.example1.tsx').default}>
                    <CollapseExample1/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Accordion</h3>
                <p className={"introduce"}>In accordion mode, only one panel can be expanded at a time.</p>
                <Demo code={require('!!raw-loader!./collapse.example1.tsx').default}>
                    <CollapseExample2/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Selected</h3>
                <p className={"introduce"}>You can set selected to show default.</p>
                <Demo code={require('!!raw-loader!./collapse.example1.tsx').default}>
                    <CollapseExample3/>
                </Demo>
            </Container>
        </Fragment>
    )
};

export default CollapseDemo