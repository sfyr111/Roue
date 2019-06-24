import DialogExample1 from "./dialog.example1";
import DialogExample2 from "./dialog.example2";
import DialogExample3 from "./dialog.example3";
import DialogExample4 from "./dialog.example4";
import DialogExample5 from "./dialog.example5";
import * as React from 'react';
import Demo from '../../../demo';
import {Fragment} from 'react';
import Container from "../../container/container"
import "./dialog.demo.scss"

const DialogDemo = () => {
    return (
        <Fragment>
            <h1>Dialog</h1>
            <p className={"introduce"}>A dialog displays content that temporarily blocks interactions with the main view of a site.</p>
            <h2>TYPES</h2>
            <Container className={"wrapper"}>
                <h3>Basic</h3>
                <p className={"introduce"}>Alert Dialog</p>
                <Demo code={require('!!raw-loader!./dialog.example1.tsx').default}>
                    <DialogExample1/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <p className={"introduce"}>Confirm Dialog</p>
                <Demo code={require('!!raw-loader!./dialog.example2.tsx').default}>
                    <DialogExample2/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <p className={"introduce"}>Modal Dialog</p>
                <Demo code={require('!!raw-loader!./dialog.example3.tsx').default}>
                    <DialogExample3/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <p className={"introduce"}>non-button Dialog</p>
                <Demo code={require('!!raw-loader!./dialog.example4.tsx').default}>
                    <DialogExample4/>
                </Demo>
            </Container>
            <Container className={"wrapper"}>
                <p className={"introduce"}>button Dialog</p>
                <Demo code={require('!!raw-loader!./dialog.example5.tsx').default}>
                    <DialogExample5/>
                </Demo>
            </Container>
        </Fragment>
    )
};

export default DialogDemo