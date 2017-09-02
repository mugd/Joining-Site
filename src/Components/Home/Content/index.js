import React, { Component } from 'react'
import {  Row, Col } from 'react-flexbox-grid';
export default class Content extends Component {
  render() {
    return (
      <Row middle="xs">
          <Col xs={0} md={1} lg={1} />
        <Col xs={12} md={5} lg={5} >
        
          <div className="ms-font-xl content"> Bvp Microsoft Technical Group is Microsoft student chapter which is managed It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
        </Col>
      </Row>
    )
  }
}
