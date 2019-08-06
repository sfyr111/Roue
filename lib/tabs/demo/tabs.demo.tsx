import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Container from "../../container/container";
import "./tabs.demo.scss";
import TabsExample1 from "./tabs.example1";
const Tabs = () => {
    return (
        <Fragment>
            <h1>Tabs</h1>
            <p className={"introduce"}>Tabs make it easy to switch between different views.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Basic</h3>
                <p className={"introduce"}>Default activate first tab.</p>
                <Demo code={require('!!raw-loader!./tabs.example1.tsx').default}>
                    <TabsExample1/>
                </Demo>
            </Container>
        </Fragment>
    )
};

export default Tabs