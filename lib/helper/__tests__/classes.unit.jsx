import Classes from '../classes'
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