import React, { Component } from 'react'
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Label } from 'office-ui-fabric-react/lib/Label';
import ButtonSection from './ButtonSection'
import Heading from './../Heading'
var axios = require('axios');

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bingBackUrl: ""
    }
  }
  componentWillMount() {
    axios.get('https://bingimages.herokuapp.com/')
      .then((r) => this.setState({ bingBackUrl: r.data.url }))
  }

  render() {
    return (
      <div>
        <Image src={this.state.bingBackUrl} className="back" />
        <Grid fluid>
          <Heading />
          <ButtonSection />
        </Grid>
      </div>
    )
  }
}

export default Home