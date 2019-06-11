import * as React from 'react'
import {ReactElement} from "react";
import './layout.scss'

interface Props {
    children:ReactElement|Array<ReactElement>
}

const x:React.FunctionComponent<Props>= (props)=>{
    return (
        <div>
            {props.children}
        </div>
    )
};
export default  x