import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
import "./label.scss"

const sc = scopedClassMaker("roue-label");
interface Props extends React.HTMLAttributes<HTMLElement> {
    image?:boolean,
    imageRight?:boolean,
    pointing?:string,
    tag?:boolean,
    ribbon?:boolean,
    ribbonRight?:boolean,
    floating?:boolean
}

const Label:React.FunctionComponent<Props> = (props)=>{
    const {className ,
        image,
        imageRight ,
        pointing,
        ribbon,
        ribbonRight,
        floating,
        tag,
        ...rest } = props;

    const state= {
        image:image?image:false,
        imageRight:imageRight?imageRight:false ,
        tag:tag?tag:false,
        ribbon:ribbon?ribbon:false,
        ribbonRight:ribbonRight?ribbonRight:false,
        floating:floating?floating:false
    };
    return(
        <div className={
            sc(
                {"":true,...state},
                {extra:[className,pointing&&`pointing-${pointing}`]
                        .filter(Boolean)
                        .join(" ")}
                )}
             { ...rest}
        >
            {props.children}
        </div>
    )
};
export default Label