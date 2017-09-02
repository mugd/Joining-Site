import React, { Component } from 'react'
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
 PrimaryButton,
} from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';


import Form from './Form'
import About from './About'

var axios = require('axios');


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bingBackUrl: "",
      width: window.innerWidth,
      hideDialog: true,
      isFomSelected: false
    }
    this.handleDialog = this.handleDialog.bind(this);
  }
  handleDialog() {
    this.setState({ hideDialog: !this.state.hideDialog })
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
    const isMobile = width <= 1023;
    if (isMobile) {
      return (
        <div>
           <Dialog
          hidden={this.state.hideDialog}
          onDismiss={this.handleDialog}
          dialogContentProps={{
            type: DialogType.largeHeader,
            title: 'Events Coming Soon',
            subText: 'Events page is in Under Construction We will add it shortly'
          }}
          modalProps={{
            isBlocking: false,
            containerClassName: 'ms-dialogMainOverride'
          }}
        >

          <DialogFooter>
            <PrimaryButton onClick={this.handleDialog} text='OK' />
          </DialogFooter>
        </Dialog>
          <Image src={this.state.bingBackUrl} className="back" />
          <Grid fluid>
            <Row center="xs">
              <Col xs={12} md={4} lg={4}>



                <h1 className="ms-font-su ms-fontWeight-semibold heading">Microsoft Technical Group</h1>
                {this.state.isFomSelected ? (
                  <div>
                    <Form >

                      <PrimaryButton
                        data-automation-id='test'
                        checked={false}
                        text='Back'
                        sty
                        onClick={() => this.setState({ isFomSelected: false })}
                      />

                    </Form>
                  </div>
                ) : (
                    <div>
                      <About  isPhone={isMobile}/>

                    <br/>
                    <br/>
                      <Row center='xs' >

                        <Col xs={4} md={3} lg={3}>
                          <PrimaryButton
                            data-automation-id='test'
                            checked={false}
                            text='Join'
                            onClick={() => this.setState({ isFomSelected: true })}
                          />
                        </Col>
                        <Col xs={4} md={6} lg={3}>

                          <PrimaryButton
                            data-automation-id='test'
                            checked={false}
                            text='Events'
                            onClick={() => this.setState({hideDialog:false})}
                          />
                        </Col>
                        <Col xs={4} md={3} lg={3}>

                          <PrimaryButton
                            data-automation-id='test'
                            iconProps={{ iconName: 'FacebookLogo' }}
                            checked={false}
                            text=''
                            onClick={() => window.open('https://www.facebook.com/bvpmtg')}
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

          <Dialog
          hidden={this.state.hideDialog}
          onDismiss={this.handleDialog}
          dialogContentProps={{
            type: DialogType.largeHeader,
            title: 'Events Coming Soon',
            subText: 'Events page is in Under Construction We will add it shortly'
          }}
          modalProps={{
            isBlocking: false,
            containerClassName: 'ms-dialogMainOverride'
          }}
        >

          <DialogFooter>
            <PrimaryButton onClick={this.handleDialog} text='OK' />
          </DialogFooter>
        </Dialog>
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
                    <Form >

                      <PrimaryButton
                        data-automation-id='test'
                        checked={false}
                        text='Back'
                        sty
                        onClick={() => this.setState({ isFomSelected: false })}
                      />

                    </Form>

                  </div>
                ) : (
                    <div>
                      <About  isPhone={isMobile}/>
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
                    <Col xs={4} md={6} lg={3}>

                      <PrimaryButton
                        data-automation-id='test'
                        checked={false}
                        text='Events'
                        onClick={() => this.setState({hideDialog:false})}
                      />
                    </Col>
                    <Col xs={4} md={3} lg={3}>

                      <PrimaryButton
                        data-automation-id='test'
                        iconProps={{ iconName: 'FacebookLogo' }}
                        checked={false}
                        text=''
                        onClick={() => window.open('https://www.facebook.com/bvpmtg')}
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