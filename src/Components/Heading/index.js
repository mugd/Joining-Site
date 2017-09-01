import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Label } from 'office-ui-fabric-react/lib/Label';
export default class Content extends Component {
  render() {
    return (
      <Row center="xs">
       <Col xs={12} md={8} lg={8}>
          <h1 className="ms-font-su ms-fontWeight-semibold heading">Microsoft Technical Group</h1>
        </Col>
      </Row>
      
    )
  }
}
