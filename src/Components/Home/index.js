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
    const isMobile = width <= 600;
    if (isMobile) {
      return (
        <div>
          <Image src={this.state.bingBackUrl} className="back" />
          <Grid fluid>
          <Row center="xs">
              <Col xs={12} md={8} lg={8}>
                <Heading />
              </Col>
              </Row>

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
          
            <Row middle="xs" >
          
            <Col xs={0} md={1} lg={1}/>
              <Col xs={12} md={8} lg={8}>
              <h1></h1>
         <br/>
         <h1></h1>
         <br/>
         <br/>
         <br/>
         <br/>
                <Heading />
              </Col>
              </Row>
            <Content />
       
         <br/>
        
            <ButtonSection />
          </Grid>
        </div>
      )
    }

  }
}

export default Home