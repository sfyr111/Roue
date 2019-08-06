import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
import {HTMLAttributes, useContext} from "react";
import {MyContext} from "./reducer";

interface Props extends HTMLAttributes<HTMLElement> {
    name: string | number
}


const sc = scopedClassMaker("roue-tabs-pane");


const TabsPane: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        name,
        ...rest
    } = props
    const {state} = useContext(MyContext)
    return (
        state && state.indexOf(name) >= 0 ?
            <div className={sc({"":true},{extra:className})}
                 {...rest}
            >
                {props.children}
            </div>
            : null
    )
};


export default TabsPane