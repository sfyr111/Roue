
import * as React from "react";
import {Fragment} from 'react';
import Icon from "../icon";


export default  function(){
    return(
        <Fragment>
            <Icon className={"icons-example"} name={"google"}/>
            <Icon className={"icons-example"} name={"google plus"}/>
            <Icon className={"icons-example"} name={"HTML5"}/>
            <Icon className={"icons-example"} name={"IE"}/>
            <Icon className={"icons-example"} name={"github"}/>
        </Fragment>
    )
}