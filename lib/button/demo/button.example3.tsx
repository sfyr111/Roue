import * as React from "react";
import {Fragment} from 'react';
import Button from "../button";


export default  function(){
    return(
        <Fragment>
            <Button primary content={"Click here"}/>
            <Button secondary content={"Click here"}/>
        </Fragment>
    )
}