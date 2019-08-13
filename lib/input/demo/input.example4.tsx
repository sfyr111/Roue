import Input from "../input"
import * as React from "react";
import {Fragment} from 'react';


export default  function(){
    return(
        <Fragment>
            <Input style={{margin:'15px'}} error  placeholder='Error...' />
            <Input style={{margin:'15px'}} success placeholder='Success...' />
        </Fragment>
    )
}