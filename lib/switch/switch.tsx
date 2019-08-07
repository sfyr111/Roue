import * as React from "react";
import "./switch.scss"
import {scopedClassMaker} from "../helper/classes";
import { useEffect, useRef, useState} from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
    onChange?:()=>void
}



const sc = scopedClassMaker("roue-switch");



const Switch: React.FunctionComponent<Props> = (props) => {
    const {className,
        onChange,
        ...rest} = props;
    const switchToggle = useRef(document.createElement("button"));
    const getSwitchToggle = ()=>{
        return switchToggle.current
    };
    const [state,setState]  = useState(false);


    const setToggleState = ()=>{
        setState(!state);
        onChange&&onChange()
    };


    useEffect(()=>{
        getSwitchToggle().addEventListener("click",setToggleState);
        return ()=>{
            getSwitchToggle().removeEventListener("click",setToggleState)
        }
    },[state]);






    return (
        <button
            ref={switchToggle}
            className={sc({"":true,"checked":state},{extra:className})}
            {...rest}
        >
        </button>
    )





};

export default Switch