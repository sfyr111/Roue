import * as React from "react";
import {Col, Row} from "../grid";
import {Fragment} from "react";



export default  function (){
    return(
          <Fragment>
              <Row>
                  <Col  span={12}>Col-12</Col>
                  <Col  span={12}>Col-12</Col>
              </Row>
              <Row>
                  <Col  span={8}>Col-8</Col>
                  <Col  span={8}>Col-8</Col>
                  <Col  span={8}>Col-8</Col>
              </Row>
              <Row>
                  <Col  span={6}>Col-6</Col>
                  <Col  span={6}>Col-6</Col>
                  <Col  span={6}>Col-6</Col>
                  <Col  span={6}>Col-6</Col>
              </Row>
          </Fragment>
    )

}