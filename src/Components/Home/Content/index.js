import React, { Component } from 'react'
import {  Row, Col } from 'react-flexbox-grid';
export default class Content extends Component {
  render() {
    return (
      <Row middle="xs">
          <Col xs={0} md={1} lg={1} />
        <Col xs={12} md={5} lg={5} >
        
          <div className="ms-font-xl content"> Microsoft Technical Group (MTG) is an independent chapter of Bharati Vidyapeeth's College of Engineering, New Delhi.
We are a team of people dedicated towards learning and working with the latest computer science technologies. MTG was started with the philosophy of sharing our knowledge and learning together with our group members and we are proud to say we stuck to it from day 1 till today and we are determined to continue the same way in future.
Together we learn, together we grow.</div>
        </Col>
      </Row>
    )
  }
}
