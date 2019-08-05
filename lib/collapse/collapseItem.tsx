import * as React from "react";
import "./collapse.scss"
import {scopedClassMaker} from "../helper/classes";
import {Fragment, ReactNode, useState} from "react";


interface Props extends React.HTMLAttributes<HTMLElement> {
    header: string | ReactNode
}

const sc = scopedClassMaker("roue-collapseItem");

const CollapseItem: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        header,
        ...rest
    } = props;
    const [visible, setVisible] = useState(false);
    return (
        <Fragment>
            <div className={sc({"header": true}, {extra: className})}
                 {...rest}
                 onClick={() => setVisible(!visible)}
            >
                {header}
            </div>
            {visible && <div className={sc({"content": true})}>{props.children}</div>}
        </Fragment>
    )
};

export default CollapseItem