import * as React from 'react'
import * as ReactDom from 'react-dom'
import {HashRouter as Router, Route , Link} from 'react-router-dom'
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import {Layout,Header,Footer,Content,Aside} from "./lib/layout/layout";

ReactDom.render(
    <Router>
        <Layout>
            <Header>
                <div className="logo">
                    FUI
                </div>

            </Header>
            <Layout>
                <Aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                        <li>
                            <Link to="/dialog">对话框</Link>
                        </li>
                        <li>
                            <Link to="/layout">布局</Link>
                        </li>
                    </ul>
                </Aside>
                <Content>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                </Content>
            </Layout>
            <Footer>

            </Footer>
        </Layout>
    </Router>
    , document.querySelector('#root')
);
