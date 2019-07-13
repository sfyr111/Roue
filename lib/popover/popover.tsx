import * as React from "react";
import {ReactNode, useEffect, useRef, useState} from "react";
import {scopedClassMaker} from "../helper/classes";
import "./popover.scss"

interface Props extends React.HTMLAttributes<HTMLElement> {
    content: string | ReactNode,
    position?: string,
    trigger?: string
}

const sc = scopedClassMaker("roue-popover")
const Popover: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        content,
        position,
        trigger,
        ...rest
    } = props;
    const [visible, setVisible] = useState(false);
    const contentWrapperRef = useRef(document.createElement("div"));
    const triggerWrapperRef = useRef(document.createElement("div"));
    const getTriggerElement = () => {
        return triggerWrapperRef.current;
    };
    const getContentElement = () => {
        return contentWrapperRef.current;

    };
    const validator = () => {
        return (position === "top" || position === "left" || position === "right" || position === "bottom") ? position : "top"
    };



    const positionContent = () => {
        const trigger = getTriggerElement();
        const content = getContentElement();
        const {width, height, top, left} = trigger.getBoundingClientRect();
        const {height: height2} = content.getBoundingClientRect();
        const positions = {
            "top": {"top": top + window.scrollY, "left": left + window.scrollX,},
            "bottom": {"top": top + height + window.scrollY, "left": left + window.scrollX},
            "left": {
                "top": top + window.scrollY + (height - height2) / 2,
                "left": left + window.scrollX
            },
            "right": {
                "top": top + window.scrollY + (height - height2) / 2,
                "left": left + window.scrollX + width
            }
        };
        content.style.left = positions[validator()].left + 'px';
        content.style.top = positions[validator()].top + 'px';
    };


    const open = () => {
        setVisible(true);
        positionContent();
    };
    const close = () => {
        setVisible(false);
    };

    const onClick = () => {
        if (visible) {
            close()
        } else {
            open()
        }
    };

    useEffect(() => {
        if (trigger === 'click') {
            getTriggerElement().addEventListener('click', onClick)
        } else {
            getTriggerElement().addEventListener('mouseenter', open);
            getTriggerElement().addEventListener('mouseleave', close)
        }
        return () => {

            if (trigger === 'click') {
                getTriggerElement().removeEventListener('click', onClick)
            } else {
                getTriggerElement().removeEventListener('mouseenter', open);
                getTriggerElement().removeEventListener('mouseleave', close)
            }
        }
    }, [visible]);
    return (
        <div
            className={"roue-popover-wrapper"}
            {...rest}
        >
            {visible ?
                <div ref={contentWrapperRef} className={sc({
                    "": true,
                    [`position-${position}`]: true
                }, {extra: className})}>{content}</div> : null}
            <div ref={triggerWrapperRef}>  {props.children}</div>
        </div>
    )
}
Popover.defaultProps = {
    position: "top",
    trigger: "click"
};


export default Popover;