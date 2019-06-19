
import * as React from "react";
import {Fragment} from 'react';
import {Layout, Content, Footer, Header} from "../layout";

export default  function(){
    return(
        <Fragment>
            <Layout className={"example-layout"}>
                <Header className={"example-layout-header"}>header</Header>
                <Content className={"example-layout-content"}>content</Content>
                <Footer className={"example-layout-footer"}>footer</Footer>
            </Layout>
        </Fragment>
    )
}