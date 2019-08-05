import * as React from "react";
import "./collapse.scss"
import {scopedClassMaker} from "../helper/classes";


interface Props extends React.HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker("roue-collapse");
const Collapse: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;

    return (<div className={sc({"": true}, {extra: className})}
        {...rest}
    >
        {props.children}
    </div>)

};

export default Collapse