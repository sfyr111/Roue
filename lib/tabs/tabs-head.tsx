import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
import {HTMLAttributes, useContext, useEffect, useRef} from "react"
import {MyContext} from "./reducer";

interface Props extends HTMLAttributes<HTMLElement> {
}


const sc = scopedClassMaker("roue-tabs-head");


const TabsHead: React.FunctionComponent<Props> = (props) => {
        const {className, ...rest} = props;


        const headLine = useRef(document.createElement("div"));
        const tabsHead = useRef(document.createElement("div"));
        const getHeadLine = () => {
            return headLine.current
        };
        const getTabsHead = () => {
            return tabsHead.current
        };


        const {state} = useContext(MyContext);
        const getLinePosition = () => {
            const parent = getTabsHead().getClientRects();
            const el = document.querySelector(".roue-tabs-items-active") || document.createElement("div");
            const {width, left} = el.getBoundingClientRect();
            const lineLeft = left - parent[0].left;
            getHeadLine().style.width = `${width}px`;
            getHeadLine().style.left = `${lineLeft}px`;
        };



        useEffect(() => {
            setTimeout(() => {
                getLinePosition()
            }, 0)
        }, state)




        return <div ref={tabsHead} className={sc({"": true}, {extra: className})}
                    {...rest}
        >
            {props.children}
            <div ref={headLine} className="roue-tabs-head-line"/>
        </div>

    }
;


export default TabsHead