import * as React from "react";
import {Fragment} from 'react';
import Button from "../button";


export default  function(){
    return(
        <Fragment>
            <Button className={"example-button"} primary content={"Click here"}/>
            <Button className={"example-button"} secondary content={"Click here"}/>
        </Fragment>
    )
}