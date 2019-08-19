# Roue

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/mattisonzhao/Roue/blob/master/LICENSE)
[![CircleCI](https://circleci.com/gh/mattisonzhao/Roue.svg?style=svg)](https://circleci.com/gh/mattisonzhao/Roue)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/mattisonzhao/Roue/issues)




#### Installation
***
Installation 🔧

Install Roue-UI, the React UI framework.
           
NPM
Roue-UI is available as an npm package.

To install and save in your package.json dependencies, run:  
  
  
```javascript
//with npm
npm install Roue
    
//with yarn
    
yarn add Roue
```

  
Please note that react >= 16.8.0 and react-dom >= 16.8.0 are peer dependencies.

***
Usage 🚗☁️
Get started with React and Roue-UI in no time.

  
❤️ ❤️ ❤️ ❤️ ❤️

#### Roue-UI is powerful and various React UI framework.   
  
we use functional programing and Typescript that make code more understandable and powerful.plus,Roue-UI without any other dependencies.   
Quick start
Here's a quick example to get you started, it's literally all you need:

```typescript jsx
import * as React from "react";
import {Fragment} from 'react';
import Button from "../button";
export default  function(){
    return(
        <Fragment>
            <Button className={"example-button"} primary content={"Click here"}/>
            <Button className={"example-button"} secondary content={"Click here"}/>
        </Fragment>
    )
}
```