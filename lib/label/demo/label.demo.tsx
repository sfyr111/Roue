import LabelExample1 from './label.example1';
import LabelExample2 from './label.example2';
import LabelExample3 from './label.example3';
import LabelExample4 from './label.example4';
import LabelExample5 from './label.example5';
import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Container from "../../container/container"
import "./label.demo.scss"

const LabelDemo = () => {
    return (
        <Fragment>
            <h1>Label</h1>
            <p className={"introduce"}>A label displays content classification.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Normal</h3>
                <p className={"introduce"}>A label</p>
                <Demo code={require('!!raw-loader!./label.example1.tsx').default}>
                    <LabelExample1/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <Demo code={require('!!raw-loader!./label.example2.tsx').default}>
                    <LabelExample2/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <Demo code={require('!!raw-loader!./label.example3.tsx').default}>
                    <LabelExample3/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Tag</h3>
                <p className={"introduce"}>A label can appear as a tag</p>
                <Demo code={require('!!raw-loader!./label.example4.tsx').default}>
                    <LabelExample4/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Floating</h3>
                <p className={"introduce"}>A label can float above another element </p>
                <Demo code={require('!!raw-loader!./label.example5.tsx').default}>
                    <LabelExample5/>
                </Demo>
            </Container>
        </Fragment>
    )
};

export default LabelDemo