import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import GridExample1 from "./grid.example1"
import GridExample2 from "./grid.example2"
import GridExample3 from "./grid.example3"
import "./grid.demo.scss";
import Container from "../../container/container";

const GridDemo = () => {
    return (
        <Fragment>

            <h1>Grid</h1>
            <p className={"introduce"}>24 Grids System.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Basic Grid</h3>
                <p className={"introduce"}>A basic Grid</p>
                <Demo code={require('!!raw-loader!./grid.example1.tsx').default}>
                    <GridExample1/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Gutter</h3>
                <p className={"introduce"}>A grid can have gutter between its columns.</p>
                <Demo code={require('!!raw-loader!./grid.example2.tsx').default}>
                    <GridExample2/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Offset</h3>
                <p className={"introduce"}>A column can have offset before</p>
                <Demo code={require('!!raw-loader!./grid.example3.tsx').default}>
                    <GridExample3/>
                </Demo>
            </Container>
        </Fragment>
    )
};


export default GridDemo