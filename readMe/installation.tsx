import * as React from "react";
import "./exampleMd.scss";
import Highlight, {defaultProps} from "prism-react-renderer";

const ReactMarkdown = require('react-markdown');


const installation = () => {
    const input = (
        `
# Installation 🔧
---
### Install Roue-UI, the React UI framework.
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  
## NPM                
#### Roue-UI is available as an npm package.
&nbsp;&nbsp;  
To install and save in your package.json dependencies, run:&nbsp;&nbsp;  
&nbsp;&nbsp;  
`);


    const codes = `
//with npm

npm install Roue
    
//with yarn
    
yarn add Roue
`;


    const input2 = (`
&nbsp;&nbsp;  
&nbsp;&nbsp;  
***Please note that react >= 16.8.0 and react-dom >= 16.8.0 are peer dependencies.***
`);
    const code = (
        <Highlight {...defaultProps} code={codes}
                   language="javascript">
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={style}>
              {tokens.map((line, i) => (
                  <div {...getLineProps({line, key: i})}>
                      {line.map((token, key) => (
                          <span {...getTokenProps({token, key})} />
                      ))}
                  </div>
              ))}
            </pre>
            )}
        </Highlight>
    );


    return (
        <div className={"example-installation"}>
            <ReactMarkdown source={input}/>
            {code}
            <ReactMarkdown source={input2}/>
        </div>
    );
};

export default installation;