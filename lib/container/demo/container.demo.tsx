import ContainerExample from  "./container.example"
import "./container.demo.scss"
import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';

const ButtonDemo = () => {
    return (
        <Fragment>
            <h1>Container</h1>
            <p className={"introduce"}>A Container like a box to include element</p>
            <h2>TYPES</h2>
                <h3>Container</h3>
                <p className={"introduce"}>A basic container</p>
                <Demo code={require('!!raw-loader!./container.example.tsx').default}>
                    <ContainerExample/>
                </Demo>
        </Fragment>
    )
};

export default ButtonDemo