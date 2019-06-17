
import * as React from "react";
import {Fragment, useState} from 'react';
import Icon from "../icon";

export default  function(){
    const [showMessage,setFalse] = useState(false);
    const message = "Hello";
    return(
        <Fragment>
            <Icon className={"icons-example"} onClick={()=>{setFalse(!showMessage)}} name={"github"}/>
            <p>{showMessage&&message}</p>
        </Fragment>
    )
}