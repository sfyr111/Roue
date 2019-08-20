import * as React from "react";
import {Fragment} from "react";
import {message} from "../message"
import Button from "../../button/button";

export default  function (){
    return(
          <Fragment>
              <Button
                  onClick={()=>
                      message.loading("I can speak loudly.",1000,()=>{alert("I'm here")})}
              >
                  Has onClose
              </Button>
          </Fragment>
    )
}