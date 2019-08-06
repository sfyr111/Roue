import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
import {HTMLAttributes} from "react";

interface Props extends HTMLAttributes<HTMLElement>{

}


const sc=scopedClassMaker("roue-tabs-body");


const TabsBody:React.FunctionComponent<Props> = (props)=>{
    const {className, ...rest} = props;
    return <div className={sc({"":true},{extra:className})}
                {...rest}
    >
        {props.children}
    </div>
};


export default TabsBody