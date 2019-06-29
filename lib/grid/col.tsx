import * as React from "react";
import {scopedClassMaker} from "../helper/classes";
import {HTMLAttributes, useContext} from "react";
import RowContext from './RowContext';

const sc = scopedClassMaker("roue-grid-col");

interface Props extends HTMLAttributes<HTMLElement> {
    span?: number | string,
    offset?: number | string,
}
const colStyle = (gutter: number) => {
    return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
    }
};

const colClass = (span: number | string, offset: number | string) => {
    return span && offset ? [
        span && `roue-grid-col-${span}`,
        offset && `roue-grid-offset-${offset}`,
    ] : [];
};
const Col: React.FunctionComponent<Props> = (props) => {
    const {gutter} = useContext(RowContext);
    const {
        className,
        span,
        offset,
        ...rest
    } = props;
    return (
        <div style={gutter ? colStyle(gutter) : undefined}
             className={
                 sc({"": true},
                     {
                         extra: [className,
                             colClass(span ? span : 0, offset ? offset : 0).filter(Boolean).join(" ")]
                             .filter(Boolean)
                             .join(" ")
                     }
                 )
             }
             {...rest} >
            {props.children}
        </div>
    )

};

export default Col