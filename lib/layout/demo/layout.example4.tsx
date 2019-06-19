
import * as React from "react";
import {Fragment} from 'react';
import {Layout, Content, Footer, Header, Aside} from "../layout";

export default  function(){
    return(
        <Fragment>
            <Layout className={"example-layout"}>
                <Aside className={"example-layout-aside"}>Aside</Aside>
                <Layout>
                    <Header className={"example-layout-header"}>Header</Header>
                    <Content className={"example-layout-content"}>Content</Content>
                    <Footer className={"example-layout-footer"}>Footer</Footer>
                </Layout>
            </Layout>
        </Fragment>
    )
}