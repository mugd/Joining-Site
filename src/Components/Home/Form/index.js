import React, { Component } from 'react'
import { TextField, } from 'office-ui-fabric-react/lib/TextField';
import {
  ComboBox,
} from 'office-ui-fabric-react/lib/ComboBox';
import {  Row, Col } from 'react-flexbox-grid';
import {
PrimaryButton,

} from 'office-ui-fabric-react/lib/Button';
import { ref } from './../../../Config/constants'
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
var years =
  [
    { key: '1', text: 'First Year' },
    { key: '2', text: 'Second Year' },
    { key: '3', text: 'Third Year' },
    { key: '4', text: 'Fourth Year' },

  ];

class Form extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    this.state = {
      name: "",
      githubHandle: "",
      email: "",
      year: "First Year",
      phoneNumber: "",
      hideDialog: true,
      sk: 1,
      date: date.toString()
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDialog = this.handleDialog.bind(this);
  }

  handleSubmit() {
    if (this.state.name !== "" &&
      isMobilePhone(this.state.phoneNumber,'any')&&
      isEmail(this.state.email)
   ) {
      ref.push(this.state)
        .then(() => {
          this.handleDialog();
          this.setState({
            name: "",
            githubHandle: "",
            email: "",
            year: "First Year",
            phoneNumber: "",
            sk: 1
          })
        })
        .catch(() => {
          alert("Failed Try again !")
        });
    }else {
      alert('Enter Valid Details !!!');
    }

  }
  handleDialog() {
    this.setState({ hideDialog: !this.state.hideDialog })
  }
  render() {

    return (
      <div>
        <Dialog
          hidden={this.state.hideDialog}
          onDismiss={this.handleDialog}
          dialogContentProps={{
            type: DialogType.largeHeader,
            title: 'Welcome to MTG!',
            subText: 'Thanks for registering with us. You will soon be notified by email.'
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

        <TextField value={this.state.name} onChanged={(value) => { this.setState({ name: value }) }} placeholder='firstname lastname' label="Name" required={true} ariaLabel='Please enter text here' />
        <TextField value={this.state.email} onChanged={(value) => { this.setState({ email: value }) }} placeholder='user@example.com' label="Email" required={true} ariaLabel='Please enter text here' />
        <TextField value={this.state.phoneNumber} onChanged={(value) => { this.setState({ phoneNumber: value }) }} label="Phone Number" required={true} ariaLabel='Please enter text here' addonString="+91" />
        <TextField value={this.state.githubHandle} onChanged={(value) => { this.setState({ githubHandle: value }) }} placeholder='mugd' label="Github Handle" required={false} ariaLabel='Please enter text here' addonString="https://github.com/" />
        <ComboBox
          defaultSelectedKey='1'
          label='Year'
          id='Basicdrop1'
          ariaLabel='Basic ComboBox example'
          allowFreeform={false}
          autoComplete='on'
          selectedKey={this.state.sk}
          onChanged={(value) => { this.setState({ sk: value.key, year: value.text }) }}
          options={years}
        />

        <br />
        <br />
        <Row center='xs'>

          <Col xs={4} md={3} lg={3}>
            {this.props.children}
          </Col>
          <Col xs={4} md={4} lg={4}>
            <PrimaryButton
              data-automation-id='test'
              iconProps={{ iconName: 'AddFriend' }}
              disabled={false}
              checked={false}
              text='Register'
              onClick={this.handleSubmit}
            />
              
                      

                
          </Col>
        
        </Row>

      </div>
    )
  }
}



export default Form