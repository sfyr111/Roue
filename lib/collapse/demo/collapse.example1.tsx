import * as React from "react";
import Collapse from "../collapse";
import CollapseItem from  "../collapseItem";

export default  function(){
    return(
            <Collapse>
                <CollapseItem header={"this is my header"}>
                    123
                </CollapseItem>
                <CollapseItem header={"this is my header"}>
                    123
                </CollapseItem>
                <CollapseItem header={"this is my header"}>
                    123
                </CollapseItem>
            </Collapse>
    )
}