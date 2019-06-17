import * as React from 'react';
import {ButtonHTMLAttributes, useState} from "react";
import {scopedClassMaker} from "../helper/classes"
import "./button.scss"

const sc = scopedClassMaker("roue-button");

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    content?:string,
    primary?:boolean,
    secondary?:boolean
}

const Button: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} =  props;
    const [onPress,setPress] = useState(false);
   const x = ()=> {
       setPress(!onPress);
       setTimeout(()=>{
           setPress(false)
       },300)
   }
    return (
        <button onClick={()=>{
           x()
        }} className={sc({onPress:onPress,"":true},{extra:className})} {...rest}/>
    )
};

export default Button