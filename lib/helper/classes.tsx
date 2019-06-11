function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classes;

interface Option {
    extra:string | undefined;
}
function scopedClassMaker(prefix:string) {
    return  (name?:string ,option?:Option)=> {
       const result =  [prefix, name].filter(Boolean).join("-");
        if(option&&option.extra) {
            return [result,option&&option.extra ].filter(Boolean).join(" ");
        }else{
            return result
        }
    }
}

export {scopedClassMaker}