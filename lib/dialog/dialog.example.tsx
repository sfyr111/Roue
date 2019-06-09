import * as React from 'react';
import Dialog from './dialog';
import {useState} from "react";

export default function () {
    const [x, setX] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setX(!x)
            }}>click
            </button>
            <Dialog visible={x} buttons={
                [
                    <button onClick={()=>{setX(false)}}> cancle </button>,
                    <button onClick={()=>{}}> ok </button>
                ]
            } onClose={(setX(false))}>
                <div>
                   <strong>HI</strong>
                </div>
            </Dialog>
        </div>
    )
}




