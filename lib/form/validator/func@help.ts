import {ErrorObj, OneError} from "./type@value";


const flat = <T>(array: Array<T | T[]>) => {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            result.push(...array[i] as T[]);
        } else {
            result.push(array[i] as T);
        }
    }
    return result;
};


const isEmpty = (value: any) => {
    return value === undefined || value === null || value === '';
};



const zip = (kvList: Array<[string, string]>) => {
    const result: { [key: string]: string[] } = {};
    kvList.map(([key, value]) => {
        result[key] = result[key] || [];
        result[key].push(value);
    });
    return result;
};



const errorsHnderle = () => {
    const errors: ErrorObj = {};
    return (key?: string, error?: OneError) => {
        if (key && error) {
            errors[key] === undefined && (errors[key] = []);
            errors[key].push(error);
            return;
        }
        return errors;
    };
};




const description = (information: { [key: string]: string }, descriptions?: { [key: string]: string }) => {
    return (key: string) => {
        return descriptions && descriptions[key] || information[key];
    };
};


export {errorsHnderle, zip, flat, isEmpty, description};