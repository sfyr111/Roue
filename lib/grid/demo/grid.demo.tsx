import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import GridExample1 from "./grid.example1"
const GridDemo = () => {
    return (
        <Fragment>
            <h1>Grid</h1>
            <p className={"introduce"}>24 Grids System.</p>
            <h2>TYPES</h2>
            <h3>Basic Grid</h3>
            <p className={"introduce"}>A basic Grid</p>
            <Demo code={require('!!raw-loader!./grid.example1.tsx').default}>
                <GridExample1/>
            </Demo>
        </Fragment>
    )
};


export default GridDemo