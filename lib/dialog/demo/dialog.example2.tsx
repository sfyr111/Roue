import * as React from 'react';
import {confirm} from "../dialog"
import Button from "../../button/button";

export default function () {
    return (
        <Button className={"example-button"} onClick={() => {
            confirm("confirm", "This is content",()=>{console.log("yes")},()=>{console.log("no")})
        }}>Confirm
        </Button>
    )
}
