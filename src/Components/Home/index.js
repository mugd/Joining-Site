import React, { Component } from 'react'
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Label } from 'office-ui-fabric-react/lib/Label';
import ButtonSection from './ButtonSection'
import Heading from './../Heading'
import Content from './Content'
import EventCard from './EventCard'
var axios = require('axios');

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bingBackUrl: "",
      width: window.innerWidth,
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
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <div>
          <Image src={this.state.bingBackUrl} className="back" />
          <Grid fluid>
            <Heading />
            <Content />
            <br />
            <ButtonSection />
          </Grid>
        </div>
      )
    } else {
      return (
        <div>
          <Image src={this.state.bingBackUrl} className="back" />
          <Grid fluid>
            <Heading />
            <Content />
            <br />
            <Row center="xs">
              <Col xs={12} md={8} lg={8}>
                <div className="ms-font-su content">Upcoming Event
                  </div>
                <br/>
              </Col>
            </Row>
            <Row center="xs">
            <Col xs={12} md={8} lg={8}>
                <EventCard />
                <br/>
              </Col>

            </Row>
            <ButtonSection />
          </Grid>
        </div>
      )
    }

  }
}

export default Home