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
        <Image src={`https://scontent.fdel4-1.fna.fbcdn.net/v/t31.0-8/12079814_920071178087110_6324831873201700019_o.jpg?oh=dadc433deda4c3b385a66632b7f3157b&oe=5A5AA31B`} className="back1" />
          
          <Grid>
          
            <Row >
          
            <Col xs={0} md={8} lg={8}>
           
            </Col>
              <Col xs={0} md={4} lg={4}>
              <br/>
              <br/>
              <br/>
              <h1 className="ms-font-su ms-fontWeight-semibold headingdesktop">Microsoft Technical Group</h1>
              <div className="ms-font-xl desktopcontent"> Bvp Microsoft Technical Group is Microsoft student chapter which is managed It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
              <br/>
              <br/>
              <ButtonSection />
              </Col>
              </Row>
         
       
     
          </Grid>
        </div>
      )
    }

  }
}

export default Home