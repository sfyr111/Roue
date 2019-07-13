import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Popover1 from "./popover.example1";
import Popover2 from "./popover.example2";
import Popover3 from "./popover.example3";
import Popover4 from "./popover.example4";
import "./popover.demo.scss";
import Container from "../../container/container";
const  PopoverDemo = () => {
    return (
        <Fragment>
            <h1>Popover</h1>
            <p className={"introduce"}>The floating card popped by clicking or hovering.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Basic</h3>
                <p className={"introduce"}>Basic message for information.</p>
                <Demo code={require('!!raw-loader!./popover.example1.tsx').default}>
                    <Popover1/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Position</h3>
                <p className={"introduce"}>You can set position of message for information.</p>
                <Demo code={require('!!raw-loader!./popover.example2.tsx').default}>
                    <Popover2/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>WrapperClose</h3>
                <p className={"introduce"}>You can set wrapperClose when you want onClose at wrapper. </p>
                <Demo code={require('!!raw-loader!./popover.example4.tsx').default}>
                    <Popover4/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Hover</h3>
                <p className={"introduce"}>You can set trigger like hover or click.</p>
                <Demo code={require('!!raw-loader!./popover.example3.tsx').default}>
                    <Popover3/>
                </Demo>
            </Container>
        </Fragment>
    )
};


export default PopoverDemo