import Input from "../input"
import * as React from "react";
import {Fragment} from 'react';


export default  function(){
    return(
        <Fragment>
            <Input style={{margin:'15px'}} focus placeholder='Focus...' />
            <Input style={{margin:'15px'}} disabled placeholder='Disabled...' />
        </Fragment>
    )
}