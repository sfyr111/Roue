import * as React from "react";
import {ReactNode, useEffect, useRef, useState} from "react";
import {scopedClassMaker} from "../helper/classes";
import "./popover.scss"

interface Props extends React.HTMLAttributes<HTMLElement> {
    content: string | ReactNode,
    position?: string,
    trigger?: string,
    wrapperClose?: boolean
}

const sc = scopedClassMaker("roue-popover")
const Popover: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        content,
        position,
        trigger,
        wrapperClose,
        ...rest
    } = props;
    const [visible, setVisible] = useState(false);
    const contentWrapperRef = useRef(document.createElement("div"));
    const triggerWrapperRef = useRef(document.createElement("div"));
    const wrapperRef = useRef(document.createElement("div"));
    const getTriggerElement = () => {
        return triggerWrapperRef.current;
    };
    const getContentElement = () => {
        return contentWrapperRef.current;
    };
    const wrapperElement = () => {
        return wrapperRef.current
    }
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
    const onClick = (e: MouseEvent) => {
        e.stopPropagation();
        if (visible) {
            close()
        } else {
            open()
        }
    };
    const wrapperEvent = (e: MouseEvent) => {
        if (getContentElement()) {
            if (!(e.target === getContentElement())) {
                e.stopPropagation();
                setVisible(false)
            }
        }
    };
    const addEvents = (trigger: string, wrapperClose: boolean) => {
        if (trigger === 'click') {
            getTriggerElement().addEventListener('click', onClick);
            if (wrapperClose) {
                document.body.addEventListener("click", wrapperEvent)
            }
        } else {
            wrapperElement().addEventListener('mouseenter', open);
            wrapperElement().addEventListener('mouseleave', close)
        }
    };
    const removeEvent = (trigger: string, wrapperClose: boolean) => {
        if (trigger === 'click') {
            getTriggerElement().removeEventListener('click', onClick);
            if (wrapperClose) {
                document.body.removeEventListener("click", wrapperEvent)
            }
        } else {
            wrapperElement().removeEventListener('mouseenter', open);
            wrapperElement().removeEventListener('mouseleave', close)
        }
    };
    useEffect(() => {
        addEvents(trigger ? trigger : "click", wrapperClose ? wrapperClose : false);
        return () => {
            removeEvent(trigger ? trigger : "click", wrapperClose ? wrapperClose : false)
        }
    }, [visible]);

    return (
        <div
            ref={wrapperRef}
            className={"roue-popover-wrapper"}
            {...rest}
        >
            {visible ?
                <div
                    ref={contentWrapperRef} className={sc({
                    "": true,
                    [`position-${position}`]: true
                }, {extra: className})}>{content}</div> : null}
            <div ref={triggerWrapperRef}>  {props.children}</div>
        </div>
    )
};

Popover.defaultProps = {
    position: "top",
    trigger: "click",
    wrapperClose: false,
};


export default Popover;