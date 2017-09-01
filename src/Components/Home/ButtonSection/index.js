import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';

export default class ButtonSection extends Component {
  render() {
    return (
      
          <Row center="xs"> 
         
            <Col xs={4} md={1} lg={1}>

              <PrimaryButton
                data-automation-id='test'
                checked={false}
                text='Join'
                onClick={() => alert('Clicked')}
              />
            </Col>
            <Col xs={4} md={1} lg={1}>

              <PrimaryButton
                data-automation-id='test'
                checked={false}
                text='Events'
                onClick={() => alert('Clicked')}
              />
            </Col>
          </Row>

    )
  }
}
