interface FormRule {
    key: string,
    min?: number,
    max?: number,
    required?: boolean,
    email?: boolean,
    url?: boolean,
    chinese?: boolean,
    minLength?: number,
    maxLength?: number,
    pattern?: patternType,
    asyncValidation?: (value: any, succeed: (value?:string) => void, fail: (value?:string) => void)=>void
}

type patternType = { reg: RegExp, description: string }

interface FormValue {
    [k: string]: any
}
type FromRules = Array<FormRule>


export {FormRule,patternType,FormValue,FromRules}