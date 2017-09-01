import React, { Component } from 'react'
import {  Row, Col } from 'react-flexbox-grid';
export default class Content extends Component {
  render() {
    return (
      <Row center="xs">

        <Col xs={12} md={8} lg={8} >
          <div className="ms-font-xl content"> Bvp Microsoft Technical Group is Microsoft student chapter which is managed It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
        </Col>
      </Row>
    )
  }
}
