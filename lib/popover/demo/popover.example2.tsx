import * as React from "react";
import Popover from "../popover"
import Button from "../../button/button";
import {Fragment} from "react";

export default function () {
    return (
        <Fragment>
            <Popover position={"top"} content={"I'm here"}>
                <Button primary>Top</Button>
            </Popover>
            <Popover position={"left"} content={"I'm here"}>
                <Button >Left</Button>
            </Popover>
            <Popover position={"right"} content={"I'm here"}>
                <Button primary>Right</Button>
            </Popover>
            <Popover position={"bottom"} content={"I'm here"}>
                <Button >Bottom</Button>
            </Popover>
        </Fragment>

    )
}