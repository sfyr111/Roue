import * as React from "react";
import {HTMLAttributes, } from "react";
import {scopedClassMaker} from "../helper/classes"
import "./buttonGroup.scss"

const sc = scopedClassMaker("roue-buttonGroup");
interface Props extends HTMLAttributes<HTMLElement>{
}
const ButtonGroup:React.FunctionComponent<Props> = (props)=>{
    const {className , ...rest} = props;
    return(
        <div className={sc("",{extra:className})} {...rest}>
            {props.children}
        </div>
    )
};
export default ButtonGroup