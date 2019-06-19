
import * as React from "react";
import {Fragment} from 'react';
import {Layout, Content, Footer, Header, Aside} from "../layout";

export default  function(){
    return(
        <Fragment>
            <Layout className={"example-layout"}>
                <Header className={"example-layout-header"}>Header</Header>
                <Layout>
                    <Aside className={"example-layout-aside"}>Aside</Aside>
                    <Content className={"example-layout-content"}>Content</Content>
                </Layout>
                <Footer className={"example-layout-footer"}>Footer</Footer>
            </Layout>
        </Fragment>
    )
}