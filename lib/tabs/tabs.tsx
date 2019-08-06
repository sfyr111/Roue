import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
import {HTMLAttributes, useReducer} from "react";
import reducer, {MyContext} from "./reducer";
import TabsBody from "./tabs-body";
import TabsHead from "./tabs-head";
import TabsItems from "./tabs-items";
import TabsPane from "./tabs-pane"
import "./tabs.scss"
interface Props extends HTMLAttributes<HTMLElement> {

}


const sc = scopedClassMaker("roue-tabs");


const Tabs: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        ...rest
    } = props;
    const [state, dispatch] = useReducer(reducer, [1]);

    return (
        <MyContext.Provider value={{state, dispatch}}>
            <div className={sc({"":true},{extra:className})}
                 {...rest}
            >
                {props.children}
            </div>
        </MyContext.Provider>
    )
};


export default Tabs
export {Tabs,TabsBody,TabsHead,TabsItems,TabsPane}