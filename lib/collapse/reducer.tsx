import * as React from "react";
import {Context} from "react";

interface collapseAction {
    name:string | number,
    type:string
}


export default function reducer(state:Array<number|string>, action:collapseAction) {
    switch (action.type) {
        case 'ADD':
            return [...state,action.name];
        case 'REMOVE':
            return state.filter((n:string|number)=> n!==action.name);
        case 'SINGLE':
            return [action.name];
        default:
            throw new Error();
    }
}





interface collapseContextState {
    state?:Array<number|string>,
    dispatch?:any,
    single?:boolean
}
const MyContext:Context<collapseContextState> = React.createContext({});
export {MyContext}