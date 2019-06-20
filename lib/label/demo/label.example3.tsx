import Label from "../label"
import * as React from "react";
import {Fragment} from 'react';


export default function () {
    return (
        <Fragment>
            <Label imageRight>
                Joe
                <img src="https://cdn.sinaimg.cn.52ecy.cn/large/005BYqpgly1g46s4dkfmyj301e01e3ye.jpg" alt=""/>
            </Label>
            <Label imageRight>
                Elliot
                <img src="https://cdn.sinaimg.cn.52ecy.cn/large/005BYqpgly1g46s4lfkxwj301e01ejra.jpg" alt=""/>
            </Label>
            <Label imageRight>
                Stevie
                <img src="https://cdn.sinaimg.cn.52ecy.cn/large/005BYqpgly1g46s4ql5v3j301e01e3ye.jpg" alt=""/>
            </Label>
        </Fragment>
    )
}