import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
const sc = scopedClassMaker("roue-layout");

const footer:React.FunctionComponent= (props)=>{

    return (
        <div className={sc("footer")}>
            {props.children}
        </div>
    )
};
export default  footer