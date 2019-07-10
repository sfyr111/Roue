import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Message1 from "./message.example1";
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
        </Fragment>
    )
};


export default MessageDemo