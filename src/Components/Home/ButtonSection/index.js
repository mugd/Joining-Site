import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';

export default class ButtonSection extends Component {
  render() {
    return (
      
          <Row >
            
            <Col xs={4} md={3} lg={3}>
              <PrimaryButton
                data-automation-id='test'
                checked={false}
                text='Join'
                onClick={() => alert('Clicked')}
              />
            </Col>
            <Col xs={4} md={4} lg={4}>

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
