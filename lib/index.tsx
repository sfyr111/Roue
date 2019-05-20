import * as  React from "react";
import * as ReactDom from "react-dom";
import Icon from "./icon/icon"
ReactDom.render(
    <div>
        <Icon name={"alibaba"} className={"icon"} onClick={()=>{console.log(1)}}
              onMouseEnter={()=>{
            console.log('here');} }
        />
    </div>
    ,
    document.querySelector('#root')
);