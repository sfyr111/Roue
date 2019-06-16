import Input from "../input"
import * as React from "react";
import {Fragment} from 'react';


export default  function(){
    return(
        <Fragment>
            <Input error  placeholder='Error...' />
            <Input success placeholder='Success...' />
        </Fragment>
    )
}