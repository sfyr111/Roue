import {Context, createContext} from "react";

export interface RowContextState {
    gutter?: number;
}

const RowContext: Context<RowContextState> = createContext({});

export default RowContext;