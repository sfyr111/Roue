import {HTMLAttributes} from "react";
import {scopedClassMaker} from "../helper/classes";
import * as React from "react";
import RowContext from './RowContext';

const sc = scopedClassMaker("roue-grid-row");

interface Props extends HTMLAttributes<HTMLElement> {
    gutter?: number,
    align?: string
}

const Row: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        gutter,
        align,
        ...rest
    } = props;
    const rowStyle = (gutter: number ) => {
        return {
            marginLeft: -gutter / 2 + 'px',
            marginRight: -gutter / 2 + 'px'
        }
    };
    const rowClass = (align: string) => {
        return align && align != "" && `roue-grid-row-align-${align}`
    };
    return (
        <RowContext.Provider value={{gutter}}>
            <div style={gutter?rowStyle(gutter):undefined}
                 className={sc({"": true}, {extra: [className, rowClass(align ? align : "")].filter(Boolean).join(" ")})}  {...rest} >
                {props.children}
            </div>
        </RowContext.Provider>
    )
}

export default Row