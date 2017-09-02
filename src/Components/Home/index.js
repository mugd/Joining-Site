import React, { Component } from 'react'
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Label } from 'office-ui-fabric-react/lib/Label';
import ButtonSection from './ButtonSection'
import {
  CommandButton, PrimaryButton,
  IButtonProps
} from 'office-ui-fabric-react/lib/Button';
import Heading from './../Heading'
import Content from './Content'
import Form from './Form'
import About from './About'
var axios = require('axios');
var years =
  [
    { key: '1', text: 'First Year' },
    { key: '2', text: 'Second Year' },
    { key: '3', text: 'Third Year' },
    { key: '4', text: 'Fourth Year' },

  ];

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bingBackUrl: "",
      width: window.innerWidth,
      isFomSelected: false
    }
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    axios.get('https://bingimages.herokuapp.com/')
      .then((r) => this.setState({ bingBackUrl: r.data.url }))
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };



  render() {

    const { width } = this.state;
    const isMobile = width <= 600;
    if (isMobile) {
      return (
        <div>
          <Image src={this.state.bingBackUrl} className="back" />
          <Grid fluid>
            <Row center="xs">
              <Col xs={12} md={4} lg={4}>



                <h1 className="ms-font-su ms-fontWeight-semibold heading">Microsoft Technical Group</h1>
                {this.state.isFomSelected ? (
                  <div>
                    <Form />
                    <Row center='xs'>
                 
                      <Col xs={4} md={3} lg={3}>
                        <PrimaryButton
                          data-automation-id='test'
                          checked={false}
                          text='Back'
                          sty
                          onClick={() => this.setState({ isFomSelected: false })}
                        />
                      </Col>
                      <Col xs={4} md={4} lg={4}>
                        <CommandButton
                          data-automation-id='test'
                          iconProps={{ iconName: 'AddFriend' }}
                          disabled={false}
                          checked={false}
                        >
                          Register
      </CommandButton>
                      </Col>
                    </Row>

                  </div>
                ) : (
                    <div>
                      <About />


                      <Row center='xs' >

                        <Col xs={4} md={3} lg={3}>
                          <PrimaryButton
                            data-automation-id='test'
                            checked={false}
                            text='Join'
                            onClick={() => this.setState({ isFomSelected: true })}
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

                    </div>
                  )}


              </Col>
            </Row>

          </Grid>
        </div>
      )
    } else {
      return (
        <div>
          <Image src={`https://scontent.fdel4-1.fna.fbcdn.net/v/t31.0-8/12079814_920071178087110_6324831873201700019_o.jpg?oh=dadc433deda4c3b385a66632b7f3157b&oe=5A5AA31B`} className="back1" />

          <Grid>

            <Row >

              <Col xs={0} sm={8} md={8} lg={8}>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <br />

                <br />
                <h1 className="ms-font-su ms-fontWeight-semibold headingdesktop">Microsoft Technical Group</h1>
                {this.state.isFomSelected ? (
                  <div>
                    <Form />
                    <Row >

                      <Col xs={4} md={3} lg={3}>
                        <PrimaryButton
                          data-automation-id='test'
                          checked={false}
                          text='Back'
                          sty
                          onClick={() => this.setState({ isFomSelected: false })}
                        />
                      </Col>
                      <Col xs={4} md={4} lg={4}>
                        <CommandButton
                          data-automation-id='test'
                          iconProps={{ iconName: 'AddFriend' }}
                          disabled={false}
                          checked={false}
                        >
                          Register
          </CommandButton>
                      </Col>
                    </Row>

                  </div>
                ) : (
                    <div>
                      <About />
                      <br />
                      <br />
                      <br />
                      <Row >

                        <Col xs={4} md={3} lg={3}>
                          <PrimaryButton
                            data-automation-id='test'
                            checked={false}
                            text='Join'
                            onClick={() => this.setState({ isFomSelected: true })}
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

                    </div>
                  )}


              </Col>
            </Row>

          </Grid>
        </div>
      )
    }

  }
}

export default Home