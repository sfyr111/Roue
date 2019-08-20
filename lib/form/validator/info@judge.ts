const Reg = {
    email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
    url: /[a-zA-z]+:\/\/[^\s]*/,
    chinese: /[\u4e00-\u9fa5]/
};
const information: { [key: string]: string } = {
    min: 'min',
    max: 'max',
    required: 'required',
    email: 'email',
    url: 'url',
    chinese: 'chinese',
    minLength: 'minLength',
    maxLength: 'maxLength',
    pattern: 'pattern',
};

export {Reg,information}