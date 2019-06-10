import * as React from 'react';
import  {alert, confirm,modal} from './dialog';
export default function () {
    const openModal = ()=>{
        const close = modal(<h1>你好
        <button onClick={()=>close()}>close</button></h1>)
    };
    return (

        <div>
            <h1>example 2</h1>
            <button onClick={() => { alert('d') }}>click </button>
            <button onClick={() => { confirm('d', () => { console.log('yes'); }, () => { console.log('no'); }) }}> confirm </button>
            <button onClick={openModal}>modal</button>
        </div>
    )
}
