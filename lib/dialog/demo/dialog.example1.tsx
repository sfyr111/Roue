import * as React from 'react';
import {alert} from "../dialog"
import Button from "../../button/button";

export default function () {
    return (
        <Button className={"example-button"} onClick={() => {
            alert("Alert", "This is content")
        }}>Alert
        </Button>
    )
}
