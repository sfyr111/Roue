import * as React from "react";
import {Fragment} from "react";
import {message} from "../message"
import Button from "../../button/button";

export default  function (){
    return(
          <Fragment>
              <Button primary className={"example-message"}
                      onClick={()=>message.success("Did you have good night sleep ?")}>Success</Button>
              <Button className={"example-message"}
                      onClick={()=>message.error("Did you have good night sleep ?")}>Error</Button>
              <Button primary className={"example-message"}
                      onClick={()=>message.info("Did you have good night sleep ?")}>Info</Button>
              <Button className={"example-message"}
                      onClick={()=>message.warn("Did you have good night sleep ?")}>Warn</Button>
          </Fragment>
    )
}