import * as React from 'react';
import {HTMLAttributes} from "react";
import {scopedClassMaker} from "../helper/classes"
import "./form.scss"

const sc = scopedClassMaker("roue-form");

interface Props extends HTMLAttributes<HTMLFormElement> {

}

const Form: React.FunctionComponent<Props> = (props) => {
    const {className,
        ...rest} = props;
   return (
       <form action=""
        className={sc({"":true},{extra:className})}
             {...rest}
       >
       </form>
    )
};

export default Form