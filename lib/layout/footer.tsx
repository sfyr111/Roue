import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
const sc = scopedClassMaker("roue-layout");

const footer:React.FunctionComponent= ()=>{
    return (
        <div className={sc("footer")}>
            footer
        </div>
    )
};
export default  footer