import React, { Component } from 'react'
import { TextField, } from 'office-ui-fabric-react/lib/TextField';
import {
  ComboBox,
  IComboBoxOption
} from 'office-ui-fabric-react/lib/ComboBox';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Label } from 'office-ui-fabric-react/lib/Label';

var years =
  [
    { key: '1', text: 'First Year' },
    { key: '2', text: 'Second Year' },
    { key: '3', text: 'Third Year' },
    { key: '4', text: 'Fourth Year' },

  ];

class Form extends Component {
  render() {
    return (
      <div>
        <TextField classID="hack" placeholder='firstname lastname' label="Name" required={true} ariaLabel='Please enter text here' />
        <TextField placeholder='user@example.com' label="Email" required={true} ariaLabel='Please enter text here' />
        <TextField  label="Phone Number" required={true} ariaLabel='Please enter text here' addonString="+91" />
        <TextField placeholder='mugd' label="Github Handle" required={false} ariaLabel='Please enter text here' addonString="https://github.com/" />
        <ComboBox
          defaultSelectedKey='1'
          label='Year'
          id='Basicdrop1'
          ariaLabel='Basic ComboBox example'
          allowFreeform={false}
          autoComplete='on'
          options={years}
        />
       
        <br/>
        <br/>

      
      </div>
    )
  }
}



export default Form