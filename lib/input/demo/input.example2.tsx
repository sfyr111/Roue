import Input from "../input"
import * as React from "react";
import {Fragment} from 'react';


export default  function(){
    return(
        <Fragment>
            <Input focus placeholder='Focus...' />
            <Input disabled placeholder='Disabled...' />
            <Input loading placeholder='Loading...' />
            <Input error placeholder='Error...' />
            <Input success placeholder='Success...' />
        </Fragment>
    )
}