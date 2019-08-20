import {FormValue, FromRules} from "./type@form";
import {errorsHnderle, isEmpty, description} from "./func@help";
import {asyncValidator} from "./func@async";
import {Reg, information} from "./info@judge";

const formValidator = (formData: FormValue, rules: FromRules, callback: (errors: any) => void, descriptions?: { [key: string]: string }): void => {
    const errorHandle = errorsHnderle();

    const describe = description(information, descriptions);


    rules.forEach(rule => {
        const value= formData[rule.key];
        if (rule.asyncValidation) {
            const promise = new Promise<string>((resolve, reject) => {
                rule.asyncValidation && rule.asyncValidation(value, (info) => resolve(info), (info) => reject(info));
            });
            errorHandle(rule.key, promise);
        }
        if (rule.required && isEmpty(value)) {
            errorHandle(rule.key, describe('required'));
        }
        if (rule.min && !isEmpty(value) && value < rule.min) {
            errorHandle(rule.key, describe('min'));
        }
        if (rule.max && !isEmpty(value) && value > rule.max) {
            errorHandle(rule.key, describe("max"));
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            errorHandle(rule.key, describe('minLength'));
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            errorHandle(rule.key, describe('maxLength'));
        }
        if (rule.email && !(Reg.email.test(value))) {
            errorHandle(rule.key, describe('mail'));
        }
        if (rule.url && !(Reg.url.test(value))) {
            errorHandle(rule.key, describe('url'));
        }
        if (rule.chinese && !(Reg.chinese.test(value))) {
            errorHandle(rule.key, describe('chinese'));
        }
        if (rule.pattern) {
            if (!(rule.pattern.reg.test(value))) {
                errorHandle(rule.key, rule.pattern.description);
            }
        }
    });


    asyncValidator(errorHandle() || {}, callback);
};


export default formValidator;


