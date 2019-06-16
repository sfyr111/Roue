import Input from "../input"
import * as React from "react";
import {Fragment} from 'react';


export default  function(){
    return(
        <Fragment>
            <Input iconLeft loading placeholder='Loading...' />
            <Input loading placeholder='Loading...' />
        </Fragment>
    )
}