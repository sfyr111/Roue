type OneError = string | Promise<string>;
type ErrorObj = { [key: string]: OneError[] }

export {OneError,ErrorObj}