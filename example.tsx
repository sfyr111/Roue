import * as React from 'react'
import * as ReactDom from 'react-dom'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import {Layout, Header, Footer, Content, Aside} from "./lib/layout/layout";

const logo = require('./logo.png');
import "./example.scss"
import {Icon} from "./lib";
import IconDemo from "./lib/icon/demo/icon.demo";

ReactDom.render(
    <Router>
        <Layout>
            <Header className={"example-header"}>
                <img src={logo} alt="Logo"/>
                <span>Roue</span>
                <div className={"example-headerIcons"}>
                    <a href="https://github.com/mattisonzhao/Roue">
                        <Icon name={"github"}/>
                    </a>
                </div>
            </Header>
            <Layout className={"example-main"}>
                <Aside className={"example-aside"}>
                    <div className={"example-asideWrapper"}>
                        <p className={"example-asideLogo"}>Roue-UI <br/>
                            v0.1.1</p>
                        <p className={"example-asideLable"}>Components</p>
                        <ul>
                            <li>
                                <NavLink to="/icon">Icon</NavLink>
                            </li>
                            <li>
                                <NavLink to="/button">Button</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dialog">Dialog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/layout">Layout</NavLink>
                            </li>
                        </ul>
                    </div>
                </Aside>
                <Content className={"example-content"}>
                    <Route path="/icon" component={IconDemo}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                </Content>
            </Layout>
            <Footer className={"example-footer"}>
                <span>©Mattison </span>
            </Footer>
        </Layout>
    </Router>
    , document.querySelector('#root')
);
