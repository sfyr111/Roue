import * as React from "react";
import {Col, Row} from "../grid";
import {Fragment} from "react";


export default function () {
    return (
        <Fragment>
            <Row>
                <Col span={4}>Col-4</Col>
                <Col span={4} offset={1}>Col-4</Col>
                <Col span={4} offset={3}>Col-4</Col>
                <Col span={4} offset={4}>Col-4</Col>
            </Row>
        </Fragment>
    )

}