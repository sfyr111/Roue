import * as React from "react";
import Collapse from "../collapse";
import CollapseItem from  "../collapseItem";

export default  function(){
    return(
            <Collapse single>
                <CollapseItem name={1} header={"this is my header"}>
                    This is my content
                </CollapseItem>
                <CollapseItem name={2} header={"this is my header"}>
                    This is my content
                </CollapseItem>
                <CollapseItem name={3} header={"this is my header"}>
                    This is my content
                </CollapseItem>
            </Collapse>
    )
}