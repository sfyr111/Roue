import Label from "../label"
import * as React from "react";
import Icon from "../../icon/icon";
import {Fragment} from "react";

export default function () {
    return (
        <Fragment>
            <div className={"example-label-floating"}>

                <Icon name={"alipay"}>
                    <Label floating> 20</Label>
                </Icon>
            </div>
            <div className={"example-label-floating"}>
                <Icon name={"facebook"}>
                    <Label floating> 20</Label>
                </Icon>
            </div>
            <div className={"example-label-floating"}>
                <Icon name={"facebook"}>
                    <Label floating> 20</Label>
                </Icon>
            </div>
        </Fragment>
    )
}