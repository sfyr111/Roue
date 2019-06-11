import * as React from 'react'
import {HTMLAttributes, ReactElement } from "react";
import './layout.scss'
import {scopedClassMaker} from "../helper/classes";
import Aside from './aside'

const sc = scopedClassMaker('roue-layout');
interface Props extends HTMLAttributes<HTMLElement>{
    children:ReactElement|Array<ReactElement>
}

const x:React.FunctionComponent<Props>= (props)=>{
    const {className , ...rest } = props;
    const children = props.children as Array<ReactElement>;
    const hasAside = 'length' in children &&
        children.reduce((result,node)=>result||node.type === Aside ,false);
    return (
        <div className={sc("",{extra:[className,hasAside&&'hasAside'].join(" ")})} {...rest}>
            {props.children}
        </div>
    )
};
export default  x