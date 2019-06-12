import Classes, {scopedClassMaker} from '../classes'
describe('classes', () => {
    it('accept one ClassName', () => {
        const result = Classes("a");
        expect(result).toEqual("a")
    });
    it('accept two ClassName', () => {
        const result = Classes("a","b");
        expect(result).toEqual("a b")
    });
    it('accept undefined ClassName', () => {
        const result = Classes("a",undefined);
        expect(result).toEqual("a")
    });
    it('accept mixed ClassName', () => {
        const result = Classes("a",undefined,false,null,"中文");
        expect(result).toEqual("a 中文")
    });
    it('accept none ClassName', () => {
        const result = Classes("");
        expect(result).toEqual("")
    })
});


describe('scopedClassMaker', () => {
    it('接受字符串或对象',()=>{
        const sc = scopedClassMaker("roue-layout");
        expect(sc("")).toEqual("roue-layout");
        expect(sc("x")).toEqual("roue-layout-x");
        expect(sc({y:true,x:false})).toEqual("roue-layout-y");
        expect(sc({y:true,x:true})).toEqual("roue-layout-y roue-layout-x");
        expect(sc({x:true},{extra:""})).toEqual("roue-layout-x");
    })
});