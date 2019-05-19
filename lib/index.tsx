import * as  React from "react";
import * as ReactDom from "react-dom";
import Icon from "./icon"

ReactDom.render(
    <div>
        <Icon name="alipay"/>
        <Icon name="alipay"/>
        <Icon name="alipay"/>
    </div>,
    document.querySelector('#root')
);