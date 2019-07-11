import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Message1 from "./message.example1";
import Message2 from "./message.example2";
import Message3 from "./message.example3";
import Message4 from "./message.example4";
import "./message.demo.scss";
import Container from "../../container/container";

const  MessageDemo = () => {
    return (
        <Fragment>
            <h1>Message</h1>
            <p className={"introduce"}>Display global messages as feedback in response to user operations.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Basic</h3>
                <p className={"introduce"}>Basic message for information.</p>
                <Demo code={require('!!raw-loader!./message.example1.tsx').default}>
                    <Message1/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Status</h3>
                <p className={"introduce"}>Status message for information,like success, error, warn, info </p>
                <Demo code={require('!!raw-loader!./message.example2.tsx').default}>
                    <Message2/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <h3>Loading</h3>
                <p className={"introduce"}>Loading message for information.</p>
                <Demo code={require('!!raw-loader!./message.example3.tsx').default}>
                    <Message3/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <p className={"introduce"}> You can set duration and onClose function.</p>
                <Demo code={require('!!raw-loader!./message.example4.tsx').default}>
                    <Message4/>
                </Demo>
            </Container>
        </Fragment>
    )
};


export default MessageDemo