import * as React from 'react';
import Dialog from "../dialog"
import Button from "../../button/button";
import Icon from "../../icon/icon";
import {Fragment, useState} from "react";

export default function () {
    const [view, setView] = useState(false);
    const header = () => {
        return (
            <div>
                <Icon name={"IE"}/> IE browser alert
            </div>
        )
    };

    return (
        <Fragment>
            <Button onClick={()=>{setView(!view)}}>IE Alert</Button>
            <Dialog
                header={header()}
                visible={view}
                onClose={()=>{setView(!view)}}
                closeOnClickMask={true}
            >
                IE Alert , you can add anything .
            </Dialog>
        </Fragment>
    )
}
