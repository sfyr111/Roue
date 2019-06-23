import * as renderer from 'react-test-renderer'
import * as React from 'react'
import Input from '../input'
import {mount} from 'enzyme'

describe('Input', () => {
    it('input exist', () => {
        const json = renderer.create(<Input/>).toJSON();
        expect(json).toMatchSnapshot();
    });
    it('input focus', function () {
        const component = mount(<Input focus />);
        expect(component.find("input").hasClass("roue-input-focus")).toEqual(true)
    });
    it('input loading', function () {
        const component = mount(<Input loading />);
        expect(component.find("input").hasClass("roue-input-loading")).toEqual(true);
        expect(component.find("svg").hasClass("roue-input-iconLoading")).toEqual(true);
    });
    it('input iconLeft', function () {
        const component = mount(<Input iconLeft loading />);
        expect(component.props().iconLeft).toEqual(true)
    });
    it('input disabled', function () {
        const component = mount(<Input disabled />);
        expect(component.find("input").hasClass("roue-input-disabled")).toEqual(true);
    });
    it('input error', function () {
        const component = mount(<Input error />);
        expect(component.find("input").hasClass("roue-input-error")).toEqual(true);
    });
    it('input success', function () {
        const component = mount(<Input success />);
        expect(component.find("input").hasClass("roue-input-success")).toEqual(true);
    });
    /* it('onClick can run ', () => {
         const fn = jest.fn();
         const component =  mount(<Input name={"alipay"} onClick={fn}/>);
         component.find('svg').simulate('click');
         expect(fn).toBeCalled();
     }) */
});