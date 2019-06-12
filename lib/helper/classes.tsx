
function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classes;

interface Option {
    extra: string | undefined
}

interface ClassToggles {
    [K: string]: boolean
}

const scopedClassMaker = (prefix: string) =>
    (name: string | ClassToggles, option?: Option) =>
        Object.entries((name instanceof Object ? name : {[name]: name}))
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(name => [prefix, name]
                .filter(Boolean)
                .join("-"))
            .concat(option && option.extra || [])
            .join(" ");

export {scopedClassMaker}