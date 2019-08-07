import * as React from "react";
import Button from "../lib/button/button";
import "./home.scss"

const Home:React.FunctionComponent = ()=>{
    return (
        <div className={"home-card"}>
                <img className={"home-logo"} src="logo.png" alt="logo"/>
            <div className={"home-introduce"}>
                <h1>ROUE-UI</h1>
                <h3>React components for faster and easier web development. Build your own design system, or start with Roue Design.</h3>
                <a href="/#/roue"> <Button primary>GET START</Button></a>
            </div>
        </div>
    )
};

export default Home