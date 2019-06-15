import * as React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import {useState} from 'react';
import {Icon} from "./lib";

interface Props {
    code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false);
    const [IconState, setIconState] = useState(false)
    const code = (
        <Highlight {...defaultProps} code={props.code} language="jsx">
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
        <div>
            <div>
                {props.children}
            </div>
            <div>
                <div style={{textAlign: "right", margin: "0 15px"}}>
                    <Icon className={"IconTrigger"} name={IconState ? "code" : "code.off"}
                          onClick={() => {
                              setCodeVisible(!codeVisible);
                              setIconState(!IconState);
                          }}
                          style={{cursor: "pointer"}}
                    />
                    <span style={{
                        fontWeight: "bold",
                        verticalAlign: "top",
                        lineHeight: "20px",
                        marginLeft: "4px",
                        cursor: "pointer"
                    }}
                          onClick={() => {
                              setCodeVisible(!codeVisible);
                              setIconState(!IconState);
                          }}
                    >
                                Try it
                    </span>
                </div>
                {codeVisible && code}
            </div>
        </div>
    );
};
export default Demo