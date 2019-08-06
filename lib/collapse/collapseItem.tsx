import * as React from "react";
import "./collapse.scss"
import {scopedClassMaker} from "../helper/classes";
import {ReactNode, useContext} from "react";
import {MyContext} from "./reducer";

interface Props extends React.HTMLAttributes<HTMLElement> {
    header: string | ReactNode,
    name: string | number
}


const sc = scopedClassMaker("roue-collapseItem");


const CollapseItem: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        header,
        name,
        ...rest
    } = props;
    const {state, dispatch, single} = useContext(MyContext);

    const validatorClick = () => {
        if (single) {
            dispatch({type: 'SINGLE', name: name})
        } else if (state && state.indexOf(name) >= 0) {
            dispatch({type: 'REMOVE', name: name});
        } else {
            dispatch({type: 'ADD', name: name});
        }
    };


    return (
        <div className={sc({"":true})}>
            <div className={sc({"header": true}, {extra: className})}
                 {...rest}
                 onClick={validatorClick}
            >
                {header}
            </div>
            {state && state.indexOf(name) >= 0 && <div
                className={sc({"content": true})}>{props.children}</div>}
        </div>
    )
};

export default CollapseItem