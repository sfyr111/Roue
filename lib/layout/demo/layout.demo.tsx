import LayoutExample1 from './layout.example1';
import LayoutExample2 from './layout.example2';
import LayoutExample3 from './layout.example3';
import LayoutExample4 from './layout.example4';
import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Container from "../../container/container"
import "./layout.demo.scss"

const LayoutDemo = () => {
    return (
        <Fragment>
            <h1>Layout</h1>
            <p className={"introduce"}>a basic layout.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Normal</h3>
                <p className={"introduce"}>Normal Layout</p>
                <Demo code={require('!!raw-loader!./layout.example1.tsx').default}>
                    <LayoutExample1/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Has Aside</h3>
                <Demo code={require('!!raw-loader!./layout.example2.tsx').default}>
                    <LayoutExample2/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <Demo code={require('!!raw-loader!./layout.example3.tsx').default}>
                    <LayoutExample3/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <Demo code={require('!!raw-loader!./layout.example4.tsx').default}>
                    <LayoutExample4/>
                </Demo>
            </Container>
        </Fragment>
    )
};

export default LayoutDemo