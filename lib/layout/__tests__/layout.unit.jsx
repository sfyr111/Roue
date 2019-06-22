import * as renderer from 'react-test-renderer'
import * as React from 'react'
import {mount} from 'enzyme'
import {Layout, Header, Content, Aside, Footer} from "../layout";


describe("Layout", () => {
    it("layout exist ", () => {
        const json = renderer.create(
            <Layout>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>)
        expect(json).toMatchSnapshot();
    })
    it("layout hasAside ", () => {
        const component = mount(
            <Layout>
                <Header>header</Header>
                <Layout>
                    <Aside>aside</Aside>
                    <Content>content</Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout>);
        expect(component.exists(".roue-layout-hasAside")).toEqual(true)
    })
})