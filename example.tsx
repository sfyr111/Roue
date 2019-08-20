import * as React from 'react';
import * as ReactDom from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import {Layout, Header, Content, Aside} from "./lib/layout/layout";
import InputDemo from "./lib/input/demo/input.demo";

const logo = require('./logo.png');
import "./example.scss";
import {Icon} from "./lib";
import IconDemo from "./lib/icon/demo/icon.demo";
import ButtonDemo from "./lib/button/demo/button.demo";
import LayoutDemo from "./lib/layout/demo/layout.demo";
import LabelDemo from "./lib/label/demo/label.demo";
import DialogDemo from "./lib/dialog/demo/dialog.demo";
import ContainerDemo from "./lib/container/demo/container.demo";
import GridDemo from "./lib/grid/demo/grid.demo";
import AffixDemo from "./lib/affix/demo/affix.demo";
import MessageDemo from "./lib/message/demo/message.demo";
import PopoverDemo from "./lib/popover/demo/popover.demo";
import CollapseDemo from "./lib/collapse/demo/collapse.demo";
import TabsDemo from "./lib/tabs/demo/tabs.demo";
import SwitchDemo from "./lib/switch/demo/switch.demo";
import Home from "./readMe/home";
import installation from "./readMe/installation";
import getStarted from "./readMe/getStarted";
import FormDemo from "./lib/form/demo/form.demo";

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
            <Route exact path="/" component={Home}/>
            <Route path="/roue" component={() => {
                return (
                    <Layout className={"example-main"}>
                        <Aside className={"example-aside"}>
                            <div className={"example-asideWrapper"}>
                                <p className={"example-asideLogo"}>Roue-UI <br/>
                                    v1.0.0</p>
                                <p className={"example-asideLable"}>
                                    <NavLink to="/roue">Installation</NavLink>
                                </p>
                                <p className={"example-asideLable"}>
                                    <NavLink to="/roue/getStarted">GetStarted</NavLink>
                                </p>
                                <p className={"example-asideLable"}>
                                    <NavLink to="/roue/components/icon">Component</NavLink>
                                </p>
                                <ul>
                                    <p className={"example-component-lable"}>General</p>
                                    <li>
                                        <NavLink to="/roue/components/icon">Icon</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/roue/components/button">Button</NavLink>
                                    </li>
                                    <p className={"example-component-lable"}>Layout</p>
                                    <li>
                                        <NavLink to="/roue/components/layout">Layout</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/roue/components/grid">Grid</NavLink>
                                    </li>
                                    <p className={"example-component-lable"}>Navigation</p>
                                    <li>
                                        <NavLink to="/roue/components/affix">Affix</NavLink>
                                    </li>
                                    <p className={"example-component-lable"}>Data Entry</p>
                                    <li>
                                        <NavLink to="/roue/components/switch">Switch</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/roue/components/input">Input</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/roue/components/form">Form</NavLink>
                                    </li>
                                    <p className={"example-component-lable"}>Data Display</p>

                                    <li>
                                        <NavLink to="/roue/components/label">Label</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/roue/components/popover">Popover</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/roue/components/collapse">Collapse</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/roue/components/tabs">Tabs</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/roue/components/container">Container</NavLink>
                                    </li>
                                    <p className={"example-component-lable"}>Feedback</p>
                                    <li>
                                        <NavLink to="/roue/components/dialog">Dialog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/roue/components/message">Message</NavLink>
                                    </li>

                                </ul>
                            </div>
                        </Aside>
                        <Content className={"example-content"}>
                            <Route path="/roue" exact component={installation}/>
                            <Route path="/roue/getStarted" exact component={getStarted}/>
                            <Route path="/roue/components/icon" component={IconDemo}/>
                            <Route path="/roue/components/button" component={ButtonDemo}/>
                            <Route path="/roue/components/dialog" component={DialogDemo}/>
                            <Route path="/roue/components/layout" component={LayoutDemo}/>
                            <Route path="/roue/components/input" component={InputDemo}/>
                            <Route path="/roue/components/label" component={LabelDemo}/>
                            <Route path="/roue/components/container" component={ContainerDemo}/>
                            <Route path="/roue/components/grid" component={GridDemo}/>
                            <Route path="/roue/components/affix" component={AffixDemo}/>
                            <Route path="/roue/components/message" component={MessageDemo}/>
                            <Route path="/roue/components/popover" component={PopoverDemo}/>
                            <Route path="/roue/components/collapse" component={CollapseDemo}/>
                            <Route path="/roue/components/tabs" component={TabsDemo}/>
                            <Route path="/roue/components/switch" component={SwitchDemo}/>
                            <Route path="/roue/components/form" component={FormDemo}/>
                        </Content>
                    </Layout>
                );
            }
            }
            />
        </Layout>
    </Router>
    , document.querySelector('#root')
);
