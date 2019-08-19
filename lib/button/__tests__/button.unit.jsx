import * as renderer from 'react-test-renderer'
import * as React from 'react'
import {mount} from 'enzyme'
import Button from "../button";
import ButtonGroup from "../buttonGroup"

describe("Button", () => {
    it("button exist", () => {
        const json = renderer.create(<Button/>).toJSON();
        expect(json).toMatchSnapshot();
    });
    it("button content", () => {
        const component1 = mount(<Button content={"123455"}/>);
        expect(component1.find("button").text()).toEqual("123455");
    });
    it("button primary", () => {
        const component = mount(<Button primary/>);
        expect(component.find("button").hasClass("roue-button-primary")).toEqual(true);
    });
    it("button secondary", () => {
        const component = mount(<Button secondary/>);
        expect(component.find("button").hasClass("roue-button-secondary")).toEqual(true);
    })
})

describe("Form Group", () => {
    it("button Group ", () => {
        const component = mount(
            <ButtonGroup>
                <Button/>
            </ButtonGroup>);
        expect(component.find("div").hasClass("roue-buttonGroup")).toEqual(true);
    });

})