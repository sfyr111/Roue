import * as React from "react";
import {Fragment} from "react";
import {message} from "../message"
import Button from "../../button/button";

export default  function (){
    return(
          <Fragment>
              <Button onClick={()=>message.normal("fuck")}>click</Button>
              <Button onClick={()=>message.success("fuck")}>click</Button>
              <Button onClick={()=>message.error("fuck")}>click</Button>
              <Button onClick={()=>message.info("fuck")}>click</Button>
              <Button onClick={()=>message.warn("fuck")}>click</Button>
              <Button onClick={()=>message.loading("fuck")}>click</Button>
              <Button onClick={()=>message.loading("fuck",10000)}>click</Button>
              <Button onClick={()=>message.loading("fuck",1000,()=>{
              })}>click</Button>

          </Fragment>
    )
}