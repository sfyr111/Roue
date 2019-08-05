import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Container from "../../container/container"
import "./collapse.demo.scss"
import CollapseExample1 from "./collapse.example1"
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
        </Fragment>
    )
};

export default CollapseDemo