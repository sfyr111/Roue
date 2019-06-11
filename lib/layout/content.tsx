import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
const sc = scopedClassMaker("roue-layout");

const content:React.FunctionComponent= ()=>{
    return (
        <div className={sc("content")}>
            content
        </div>
    )
};
export default  content