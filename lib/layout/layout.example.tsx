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