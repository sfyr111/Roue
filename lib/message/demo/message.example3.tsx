import * as React from "react";
import {Fragment} from "react";
import {message} from "../message"
import Button from "../../button/button";

export default  function (){
    return(
          <Fragment>
              <Button onClick={()=>message.loading("Hi,I'm waiting for you",10000)}>Loading</Button>
          </Fragment>
    )
}