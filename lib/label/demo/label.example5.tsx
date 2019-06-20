import Label from "../label"
import * as React from "react";
import Button from "../../button/button";
import Icon from "../../icon/icon";
import {Fragment} from "react";

export default function () {
    return (
        <Fragment>
            <div className={"example-label-floating"}>
                <Button>
                    <Icon name={"alipay"}/>
                    <Label floating> 20</Label>
                </Button>
            </div>
            <div className={"example-label-floating"}>
                <Button>
                    <Icon name={"facebook"}/>
                    <Label floating> 20</Label>
                </Button>
            </div>
            <div className={"example-label-floating"}>
                <Button>
                    <Icon name={"github"}/>
                    <Label floating> 20</Label>
                </Button>
            </div>
        </Fragment>
    )
}