import * as React from "react";

const ReactMarkdown = require('react-markdown');


const installation = () => {
    const input = (
        `
        

# **Installation**
---
### **Install Roue-UI, the React UI framework.**

# NPM
                
### Roue-UI is available as an npm package.
To install and save in your package.json dependencies, run:

\`\`\`
 // with npm 
 
npm install Roue

// with yarn

yarn add Roue
\`\`\`        
    `);
    return (
        <div>
            <ReactMarkdown source={input}/>
        </div>
    );
};

export default installation;