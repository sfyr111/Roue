function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classes;

interface Option {
    extra:string | undefined
}
interface ClassToggles  {
    [K:string]:boolean
}

function scopedClassMaker(prefix:string) {

    return (name?:string |ClassToggles ,option?:Option)=> {
        let name2;
        let result;
        if(typeof name === 'string'|| name ===undefined){
            name2 = name;
            result = [prefix, name2].filter(Boolean).join("-");
        }else{
            name2 = Object.entries(name).filter(kv => kv[1]).map(kv=>kv[0]);
            result = name2.map(n=>[prefix,n].filter(Boolean).join("-")).join(" ");
        }

        if(option&&option.extra) {
            return [result,option&&option.extra ].filter(Boolean).join(" ");
        }else{
            return result;
        }
    }
}

export {scopedClassMaker}