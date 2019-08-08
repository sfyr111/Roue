import * as React from "react";
import "./collapse.scss"
import {scopedClassMaker} from "../helper/classes";
import reducer ,{MyContext}from "./reducer"
import {useReducer} from "react";
interface Props extends React.HTMLAttributes<HTMLElement> {
    single?:boolean,
    selected?:Array<number|string>
}



const sc = scopedClassMaker("roue-collapse");



const Collapse: React.FunctionComponent<Props> = (props) => {
    const {className,
        single,
        selected,
        ...rest} = props;
    const [state,dispatch] = useReducer(reducer,selected ? selected :[]);




    return (
        <MyContext.Provider value={{state,dispatch,single}}>
        <div className={sc({"": true}, {extra: className})}
        {...rest}
    >
        {props.children}
    </div>
        </MyContext.Provider>
    )
};

export default Collapse