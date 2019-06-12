import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
const sc = scopedClassMaker("roue-layout");

const aside:React.FunctionComponent= (props)=>{
    return (
        <div className={sc("aside")}>
            {props.children}
        </div>
    )
};
export default  aside