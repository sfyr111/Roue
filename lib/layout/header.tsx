import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
const sc = scopedClassMaker('roue-layout');

const header:React.FunctionComponent= ()=>{
    return (
        <div className={sc("header")}>
            header
        </div>
    )
};
export default  header