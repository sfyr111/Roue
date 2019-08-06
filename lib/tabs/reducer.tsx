import * as React from "react";
import {Context} from "react";

interface collapseAction {
    name:string | number,
    type:string
}


export default function reducer(state:Array<number|string>, action:collapseAction) {
    switch (action.type) {
        case 'CHANGE':
            return [action.name];
        default:
            throw new Error();
    }
}





interface collapseContextState {
    state?:Array<number|string>,
    dispatch?:any,
}
const MyContext:Context<collapseContextState> = React.createContext({});
export {MyContext}