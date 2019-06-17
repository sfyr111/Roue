import IconExample1 from './icon.example1';
import IconExample2 from './icon.example2';
import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Container from "../../container/container"
import "./icon.demo.scss"

const IconDemo = () => {
    return (
        <Fragment>
            <h1>Icon</h1>
            <p className={"introduce"}>An icon is a glyph used to represent something else.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Normal</h3>
                <p className={"introduce"}>Normal icons</p>
                <Demo code={require('!!raw-loader!./icon.example1.tsx').default}>
                    <IconExample1/>
                </Demo>
            </Container>
            <h2>STATES</h2>
            <Container className={"wrapper"}>
                <h3>Click</h3>
                <p className={"introduce"}>You can click this icon to have some states.</p>
                <Demo code={require('!!raw-loader!./icon.example2.tsx').default}>
                    <IconExample2/>
                </Demo>
            </Container>
        </Fragment>
    )
};

export default IconDemo