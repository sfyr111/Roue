import * as React from "react";
import Popover from "../popover"
import Button from "../../button/button";
import {Fragment} from "react";

export default function () {
    return (
        <Fragment>
            <Popover  content={"I'm here"}>
                <Button primary>Popover</Button>
            </Popover>
        </Fragment>

    )
}