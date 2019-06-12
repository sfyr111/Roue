import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
const sc = scopedClassMaker("roue-layout");

const content:React.FunctionComponent= (props)=>{
    return (
        <div className={sc("content")}>
            {props.children}
        </div>
    )
};
export default  content