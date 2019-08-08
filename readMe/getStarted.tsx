import * as React from "react";
import "./exampleMd.scss";
import Button from "../lib/button/button";
import Highlight, {defaultProps} from "prism-react-renderer";
import Container from "../lib/container/container";

const ReactMarkdown = require('react-markdown');


const getStarted = () => {
    // @ts-ignore
    const input = (
        `
        

# Usage  🚗☁️  
---
### Get started with React and Roue-UI in no time.
&nbsp;&nbsp;  
❤️ ❤️ ❤️ ❤️ ❤️ 


Roue-UI is powerful and various React UI framework. &nbsp;&nbsp;  
&nbsp;&nbsp;  
we use functional programing and Typescript that make code more understandable and powerful.plus,Roue-UI without any other dependencies.
&nbsp;&nbsp;  

## Quick start                
#### Here's a quick example to get you started, it's literally all you need:
`);

    const input2 = `
&nbsp;&nbsp;  
&nbsp;&nbsp;  
Yes, this really is all you need to get started, as you can see in this live and interactive demo:
&nbsp;&nbsp;  
&nbsp;&nbsp;  
`


    const code = (
        <Highlight {...defaultProps} code={require('!!raw-loader!../lib/button/demo/button.example3.tsx').default}
                   language="jsx">
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
        <div className={"example-getStarted"}>
            <ReactMarkdown
                source={input}
            />
            <Container>
                {code}
            </Container>

            <ReactMarkdown
                source={input2}
            />
           <Container>
               <Button className={"example-button"} primary content={"Click here"}/>
               <Button className={"example-button"} secondary content={"Click here"}/>
           </Container>

        </div>
    );
};

export default getStarted;