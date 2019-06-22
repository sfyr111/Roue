import * as renderer from 'react-test-renderer'
import * as React from 'react'
import {mount} from 'enzyme'
import Label from "../label";


describe("Label",()=>{
    it("label exist",()=>{
        const json = renderer.create(<Label/>).toJSON();
        expect(json).toMatchSnapshot();
    })
    it("label image",()=>{
        const component = mount(<Label  image />);
        expect(component.find("div").hasClass("roue-label-image")).toEqual(true)
    })
    it("label imageRight",()=>{
        const component = mount(<Label  imageRight />);
        expect(component.find("div").hasClass("roue-label-imageRight")).toEqual(true)
    })
    it("label tag",()=>{
        const component = mount(<Label  tag />);
        expect(component.find("div").hasClass("roue-label-tag")).toEqual(true)
    })
    it("label ribbon",()=>{
        const component = mount(<Label  ribbon />);
        expect(component.find("div").hasClass("roue-label-ribbon")).toEqual(true)
    })
    it("label ribbonRight",()=>{
        const component = mount(<Label  ribbonRight />);
        expect(component.find("div").hasClass("roue-label-ribbonRight")).toEqual(true)
    })
    it("label floating",()=>{
        const component = mount(<Label  floating />);
        expect(component.find("div").hasClass("roue-label-floating")).toEqual(true)
    })
})