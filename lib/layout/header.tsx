import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
const sc = scopedClassMaker('roue-layout');

const header:React.FunctionComponent= (props)=>{
    return (
        <div className={sc("header")}>
            {props.children}
        </div>
    )
};
export default  header