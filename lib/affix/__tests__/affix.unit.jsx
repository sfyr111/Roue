import * as renderer from 'react-test-renderer';
import * as React from 'react';
import {mount} from 'enzyme';
import Affix from '../affix';

describe("Affix", () => {
    it("affix exist", () => {
        const json = renderer.create(<Affix/>).toJSON();
        expect(json).toMatchSnapshot();
    });
    it("affix content", () => {
        const component = mount(<Affix>12345</Affix>);
        expect(component.find(".roue-affix").text()).toEqual("12345");
    });
  /*  it("affix fixed", () => {
        const component = mount(<Affix>12345</Affix>);
        Object.defineProperty(window, 'scrollY', {value: 9990, writable: true})
        console.log(component.find(".roue-affix").props())
        component.find(".roue-affix").prop('onScrollY')
        expect(component.find(".roue-affix").prop('style')).toHaveProperty('position', 'fixed')
    });*/
});
