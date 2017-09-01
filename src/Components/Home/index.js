import React, { Component } from 'react'
import { Image } from 'office-ui-fabric-react/lib/Image';
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
.then((r)=>this.setState({bingBackUrl:r.data.url}))
  }

  render() {
    return (
      <div>
          <Image src={this.state.bingBackUrl} className="back"/>
      </div>
    )
  }
}

export default Home