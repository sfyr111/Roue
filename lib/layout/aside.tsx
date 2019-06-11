import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
const sc = scopedClassMaker("roue-layout");

const aside:React.FunctionComponent= ()=>{
    return (
        <div className={sc("aside")}>
            side
        </div>
    )
};
export default  aside