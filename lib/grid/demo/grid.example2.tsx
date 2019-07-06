import * as React from "react";
import {Col, Row} from "../grid";
import {Fragment} from "react";



export default  function (){
    return(
          <Fragment>
              <Row  gutter={10}>
                  <Col  span={6}>Col-6</Col>
                  <Col  span={6}>Col-6</Col>
                  <Col  span={6}>Col-6</Col>
                  <Col  span={6}>Col-6</Col>
              </Row>
          </Fragment>
    )

}