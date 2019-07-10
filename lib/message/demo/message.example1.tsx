import * as React from "react";
import {Fragment} from "react";
import {message} from "../message"
import Button from "../../button/button";

export default  function (){
    return(
          <Fragment>
              <Button onClick={()=>message.normal("fuck")}>click</Button>
          </Fragment>
    )
}