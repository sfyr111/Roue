import * as React from "react";
import "./exampleMd.scss"
const ReactMarkdown = require('react-markdown');


const getStart = () => {
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

with npm
 \`\`\`
npm install Roue
\`\`\` 
  &nbsp;&nbsp;     
with yarn
 \`\`\`
yarn add Roue
\`\`\`        
  &nbsp;&nbsp;  

***Please note that react >= 16.8.0 and react-dom >= 16.8.0 are peer dependencies.***

  &nbsp;&nbsp; 
  
---
&nbsp;&nbsp; 







    `);
    return (
        <div className={"example-getStart"}>
            <ReactMarkdown source={input}/>
        </div>
    );
};

export default getStart;