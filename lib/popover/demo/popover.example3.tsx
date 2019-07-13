import * as React from "react";
import Popover from "../popover"
import Button from "../../button/button";
import {Fragment} from "react";

export default function () {
    return (
        <Fragment>
            <Popover trigger={"hover"} position={"top"} content={"I'm here"}>
                <Button primary>Top</Button>
            </Popover>
            <Popover trigger={"hover"} position={"left"} content={"I'm here"}>
                <Button >Left</Button>
            </Popover>
            <Popover trigger={"hover"} position={"right"} content={"I'm here"}>
                <Button primary>Right</Button>
            </Popover>
            <Popover trigger={"hover"} position={"bottom"} content={"I'm here"}>
                <Button >Bottom</Button>
            </Popover>
        </Fragment>

    )
}