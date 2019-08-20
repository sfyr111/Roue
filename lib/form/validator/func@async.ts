import {flat, zip} from "./func@help";
import {ErrorObj, OneError} from "./type@value";


const asyncValidator = (errors: ErrorObj, callback: (errors: any) => void) => {
    const flattenErrors = flat(Object.keys(errors).map(
        key => errors[key].map<[string, OneError]>(error => [key, error]))
    );
    const newPromises = flattenErrors.map(
        ([key, promiseOrString]) => {
            const promise = (promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString));
            return promise.then<[string, undefined], [string, string]>(() => [key, undefined], (reason) => [key, reason]);
        }
    );
//@ts - type guard
    const hasError = (item: [string, undefined] | [string, string]): item is [string, string] => {
        return typeof item[1] === 'string';/**/
    };
    Promise.all(newPromises).then(results => {
        callback(zip(results.filter<[string, string]>(hasError)));
    });
};

export {asyncValidator}


