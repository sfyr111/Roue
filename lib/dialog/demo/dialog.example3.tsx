import * as React from 'react';
import {modal} from "../dialog"
import Button from "../../button/button";

export default function () {
    const modals = ()=>{
        return(
            <div className="example-dialog">
            <img src="https://i.bmp.ovh/imgs/2019/06/ea9c95c9c2cd55c6.png" alt=""/>
            <p>We've found the following gravatar image associated with your e-mail address.
                Is it okay to use this photo?</p>
            </div>
        )
    }
    return (
        <Button className={"example-button"} onClick={() => {
            modal("modal", modals())
        }}>modal
        </Button>
    )
}
