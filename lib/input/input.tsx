import * as React from "react";
import {scopedClassMaker} from "../helper/classes"
import "./input.scss"

const sc = scopedClassMaker("roue-input");

interface Props extends React.HTMLAttributes<HTMLInputElement>{
    focus?:boolean,
    loading?:boolean,
    disabled?:boolean,
    error?:boolean,
    success?:boolean
}
const Input:React.FunctionComponent<Props> = (props)=>{
    const {className,
        focus, loading, disabled, error, success,
        ...rest } = props ;
    const states = {
        focus:focus?focus:false,
        loading:loading?loading:false,
        disabled:disabled?disabled:false,
        error:error?error:false,
        success:success?success:false,
    }
    return(
           <input type="text"  className={sc({ ...states },{extra:["roue-input",className?className:"" ].filter(Boolean).join(" ")})} {...rest} >
               {props.children}
           </input>
    )
};

export default Input