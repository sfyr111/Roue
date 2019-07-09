import * as React from "react";
import {HTMLAttributes, useEffect, useRef} from "react";
import {scopedClassMaker} from "../helper/classes";


const sc = scopedClassMaker("roue-affix");

interface Props extends HTMLAttributes<HTMLElement> {
}


const Affix: React.FunctionComponent<Props> = (props) => {
        const {
            className,
            onChange,
            ...rest
        } = props;
        const affix = useRef(null);
        // not good functional
        const addStyle = (offset: number, affix: any) => {
            return () => {
                const height = window.scrollY;
                if (offset === height || height > offset) {
                    affix.current.style.position = "fixed";
                    affix.current.style.top = 0
                } else {
                    affix.current.style.position = "static";
                    affix.current.style.top = "unset"
                }
            }
        };
        const fixedElement = (affix: any) => {
            const offset =  affix.current.offsetTop;
            return  addStyle(offset, affix)
        };

        useEffect(() => {
            const onscrollHandle =  fixedElement(affix);
            window.addEventListener("scroll", onscrollHandle);
            return ()=>{
                window.removeEventListener("scroll", onscrollHandle)
            }
        });
        return (
            <div ref={affix}
                 className={
                     sc(
                         {
                             "": true,
                         }, {extra: className})}{...rest} >
                {props.children}
            </div>
        )
    };
export default Affix