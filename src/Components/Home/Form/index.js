import React, { Component } from 'react'
import { TextField, } from 'office-ui-fabric-react/lib/TextField';
import {
  ComboBox,
  IComboBoxOption
} from 'office-ui-fabric-react/lib/ComboBox';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  CommandButton, PrimaryButton,
  IButtonProps
} from 'office-ui-fabric-react/lib/Button';
import ref from './../../../Config/constants'
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
var years =
  [
    { key: '1', text: 'First Year' },
    { key: '2', text: 'Second Year' },
    { key: '3', text: 'Third Year' },
    { key: '4', text: 'Fourth Year' },

  ];

class Form extends Component {
constructor(props){
  super(props);
  this.state = {
    name:"",
    githubHandle:"",
    email:"",
    year:"First Year",
    phoneNumber:"",
    hideDialog: true
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDialog = this.handleDialog.bind(this);
}

handleSubmit() {
  console.log(this.state.year);
  this.handleDialog();
}
handleDialog() {
this.setState({hideDialog:!this.state.hideDialog})
}
  render() {
   
    return (
      <div>
         <Dialog
          hidden={ this.state.hideDialog }
          onDismiss={  this.handleDialog }
          dialogContentProps={ {
            type: DialogType.largeHeader,
            title: 'Thanks For Registring ',
            subText: 'You will get shortly email for slack and joing mtg!'
          } }
          modalProps={ {
            isBlocking: false,
            containerClassName: 'ms-dialogMainOverride'
          } }
        >
         
          <DialogFooter>
            <PrimaryButton onClick={this.handleDialog   } text='OK' />
          </DialogFooter>
        </Dialog>

        <TextField   onChanged={(value)=>{this.setState({name:value})}} classID="hack" placeholder='firstname lastname' label="Name" required={true} ariaLabel='Please enter text here' />
        <TextField   onChanged={(value)=>{this.setState({email:value})}} placeholder='user@example.com' label="Email" required={true} ariaLabel='Please enter text here' />
        <TextField   onChanged={(value)=>{this.setState({phoneNumber:value})}} label="Phone Number" required={true} ariaLabel='Please enter text here' addonString="+91" />
        <TextField   onChanged={(value)=>{this.setState({githubHandle:value})}}placeholder='mugd' label="Github Handle" required={false} ariaLabel='Please enter text here' addonString="https://github.com/" />
        <ComboBox
          defaultSelectedKey='1'
          label='Year'
          id='Basicdrop1'
          ariaLabel='Basic ComboBox example'
          allowFreeform={false}
          autoComplete='on'
          onChanged={(value)=>{this.setState({year:value.text})}}
          options={years}
        />
       
        <br/>
        <br/>
        <Row center='xs'>

                        <Col xs={4} md={3} lg={3}>
                        {this.props.children}
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                          <CommandButton
                            data-automation-id='test'
                            iconProps={{ iconName: 'AddFriend' }}
                            disabled={false}
                            checked={false}
                            onClick={this.handleSubmit}
                          >
                            Register
                         </CommandButton>
                        </Col>
                      </Row>
      
      </div>
    )
  }
}



export default Form