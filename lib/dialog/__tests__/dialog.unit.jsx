import * as renderer from 'react-test-renderer'
import * as React from 'react'
import {mount} from 'enzyme'
import Dialog, {alert, confirm, modal} from "../dialog"
import Button from "../../button/button";


const buttons = () => {
    return (
        [<Button primary>OK</Button>]
    )
};
describe("Dialog", () => {
    it("alert exist", () => {
        const json = renderer.create(<Button onClick={alert("xx", "xx")}/>).toJSON();
        expect(json).toMatchSnapshot();
    });
    it("confirm exist", () => {
        const json = renderer.create(<Button onClick={confirm("xx", "xx", () => {
        }, () => {
        })}/>).toJSON();
        expect(json).toMatchSnapshot();
    });
    it("modal exist", () => {
        const json = renderer.create(<Button onClick={modal("xx", "xx", buttons())}/>).toJSON();
        expect(json).toMatchSnapshot();
    });
    it('Dialog visible and exist', function () {
        const component = mount(<Dialog visible={true} onClose={()=>{}}>123</Dialog>);
        expect(component.exists(".roue-dialog")).toEqual(true)
    });
    it('Dialog header', function () {
        const component = mount(<Dialog visible={true} header={"123"} onClose={()=>{}}>123</Dialog>);
        expect(component.find(".roue-dialog-header").text()).toEqual("123")
    });
    it('Dialog footer', function () {
        const buttons = [<Button>123</Button>,<Button>123</Button>];
        const component = mount(<Dialog visible={true} buttons={buttons} onClose={()=>{}}>123</Dialog>);
        expect(component.exists(".roue-dialog-footer")).toEqual(true)
    });
    it('Dialog onClose and closeOnClickMask', function () {
        const fn = jest.fn();
        const component = mount(<Dialog visible={true}  onClose={fn}>123</Dialog>);
        component.find('.roue-dialog-mask').simulate('click');
        expect(fn).toBeCalled();
    });
});