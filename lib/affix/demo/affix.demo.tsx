import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import AffixExample1 from "./affix.example1"
import "./affix.demo.scss";
import Container from "../../container/container";

const  AffixDemo = () => {
    return (
        <Fragment>
            <h1>Affix</h1>
            <p className={"introduce"}>Make an element stick to viewport.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Basic</h3>
                <p className={"introduce"}>The simplest usage.</p>
                <Demo code={require('!!raw-loader!./affix.example1.tsx').default}>
                    <AffixExample1/>
                </Demo>
            </Container>
        </Fragment>
    )
};


export default AffixDemo