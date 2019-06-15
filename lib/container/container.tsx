import * as React from "react";
import classes from "../helper/classes";
import "./container.scss"
interface Props extends React.HTMLAttributes<HTMLElement>{
}
const Container:React.FunctionComponent<Props> = (props)=>{
    const {className, ...rest} = props;
    return (<div className={classes("roue-container",className)} {...rest}>
            {props.children}
        </div>
    )

};

export default Container