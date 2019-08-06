import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
import {HTMLAttributes, useContext, useEffect, useState} from "react";
import {MyContext} from "./reducer";

interface Props extends HTMLAttributes<HTMLElement> {
    name: string | number
}


const sc = scopedClassMaker("roue-tabs-items");


const TabsItems: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        name,
        ...rest
    } = props;
    const [active,setActive] = useState(false);
    const {state,dispatch} = useContext(MyContext);


    const Active = ()=>{
        if (state&&state.indexOf(name) < 0) {
            setActive(false)
        } else {
            setActive(true)
        }
    };

    useEffect(()=>{
        Active()
    },state)


    return <div className={sc({"":true,active:active},{extra:className})}
                onClick={() => {
                    dispatch({type: "CHANGE", name: name});
                }}
                {...rest}
    >
        {props.children}
    </div>
};


export default TabsItems