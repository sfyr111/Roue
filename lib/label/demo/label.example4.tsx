import Label from "../label"
import * as React from "react";
import {Fragment} from 'react';

export default function () {
    return (
        <Fragment>
            <Label tag> Hello</Label>
            <Label tag className={"example-label-tag-red"}> Hello</Label>
            <Label tag className={"example-label-tag-black"}> Hello</Label>
        </Fragment>
    )
}