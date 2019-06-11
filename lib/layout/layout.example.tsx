import * as React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from "./aside";

export default function () {

    return (
        <div>
            <div>
                <h1>example 1 </h1>
                <Layout style={{height: 500}}>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>example 2 </h1>
                <Layout style={{height: 500}}>
                    <Header>header</Header>
                    <Layout>
                        <Aside>aside</Aside>
                        <Content>content</Content>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>example 3 </h1>
                <Layout style={{height: 500}}>
                    <Header>header</Header>
                    <Layout>
                        <Content>content</Content>
                        <Aside>aside</Aside>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>example 4 </h1>
                <Layout style={{height: 500}}>
                    <Aside>aside</Aside>
                    <Layout>
                        <Header>header</Header>
                        <Content>content</Content>
                        <Footer>footer</Footer>
                    </Layout>
                </Layout>
            </div>
            <div>
                <h1>example 5 </h1>
                <Layout style={{height: 500}}>
                    <Layout>
                        <Header>header</Header>
                        <Content>content</Content>
                        <Footer>footer</Footer>
                    </Layout>
                    <Aside>aside</Aside>
                </Layout>
            </div>
        </div>
    )
}