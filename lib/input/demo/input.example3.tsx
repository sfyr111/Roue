import Input from "../input"
import * as React from "react";
import {Fragment} from 'react';


export default  function(){
    return(
        <Fragment>
            <Input style={{margin:'15px'}} iconLeft loading placeholder='Loading...' />
            <Input style={{margin:'15px'}} loading placeholder='Loading...' />
        </Fragment>
    )
}