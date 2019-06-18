import * as React from "react";
import {Fragment} from 'react';
import ButtonGroup from "../buttonGroup"
import Button from "../button";

export default  function(){
    return(
        <Fragment>
            <ButtonGroup>
                <Button primary content={"Left"} />
                <Button secondary content={"Right"} />
            </ButtonGroup>
            <ButtonGroup>
                <Button primary content={"Left"} />
                <Button secondary content={"Center"} />
                <Button content={"Right"} />
            </ButtonGroup>
        </Fragment>
    )
}