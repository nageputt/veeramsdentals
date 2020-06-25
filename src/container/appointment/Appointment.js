import React from 'react'
import Button from '@material-ui/core/Button';
import FlatButton from "material-ui/FlatButton";
import moment from "moment";
import Dialog from "material-ui/Dialog";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Card from "material-ui/Card";
import Calendar from 'react-calendar';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'react-calendar/dist/Calendar.css';

const aftrSlot = ["9:00", "10:00", "11:00"];
const mngSlot = ["12:00","1:00" , "2:00", "3:00", "4:00"];
export default class Appointment extends React.Component {
  constructor() {
    super()
    this.state = {
      smallScreen: window.innerWidth < 768,
      stepIndex: 0,
      confirmationModalOpen: false,
      appointmentDate:null,
      appointmentMeridiem: 0,
      validEmail: true,
      validPhone: true,
    }
    
    this.handleSetAppointmentDate = this.handleSetAppointmentDate.bind(this)
    this.handleSetAppointmentMeridiem = this.handleSetAppointmentMeridiem.bind(this)
    this.renderAppointmentTimes = this.renderAppointmentTimes.bind(this)
    this.handleSetAppointmentSlot = this.handleSetAppointmentSlot.bind(this)
    this.renderAppointmentConfirmation = this.renderAppointmentConfirmation.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  checkDisableDate(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }


  renderConfirmationString() {
    const spanStyle = {color: '#3483ec'}
    return this.state.confirmationTextVisible ? <h2 style={{ textAlign: this.state.smallScreen ? 'center' : 'left', color: '#bdbdbd', lineHeight: 1.5, padding: '0 10px', fontFamily: 'Roboto'}}>
      { <span>
        Scheduling a

          <span style={spanStyle}> 1 hour </span>

        appointment {this.state.appointmentDate && <span>
          on <span style={spanStyle}>{moment(this.state.appointmentDate).format('dddd[,] MMMM Do')}</span>
      </span>} {Number.isInteger(this.state.appointmentSlot) && <span>at <span style={spanStyle}>{moment().hour(9).minute(0).add(this.state.appointmentSlot, 'hours').format('h:mm a')}</span></span>}
      </span>}
    </h2> : null
  }

  handleSetAppointmentDate(value) {
    this.handleNextStep()
    this.setState({ appointmentDate: value, confirmationTextVisible: true })
  }

  handleNextStep() {
    const { stepIndex } = this.state
    return (stepIndex < 3) ? this.setState({ stepIndex: stepIndex + 1}) : null
  }

  handleSetAppointmentMeridiem(meridiem) {
    this.setState({ appointmentMeridiem: meridiem})
  }

  renderAppointmentTimes() {
    if (this.state.appointmentMeridiem) {
      return mngSlot.map(slot => {
        return <RadioButton
          label= {slot}
          key={slot}
          value={slot}
          style={{marginBottom: 15}}/>

          
      })
    }else{
      return aftrSlot.map(slot => {
        return <RadioButton
          label= {slot}
          key={slot}
          value={slot}
          style={{marginBottom: 15}}/>
      })
    } 
  }

  handleSetAppointmentSlot(slot) {
    this.handleNextStep()
    this.setState({ appointmentSlot: slot })
  }

  updateStep(stepNumber){
    if(this.state.appointmentDate){
      this.setState({ stepIndex: stepNumber})
    }else if(this.state.appointmentSlot){
      this.setState({ stepIndex: stepNumber})
    }else if(stepNumber === 0){
      this.setState({ stepIndex: stepNumber })
    }
  

  }
  validateEmail(event) {
      /* eslint-disable */
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    this.setState({ email: event.target.value}) 
    return regex.test(event.target.value) ? this.setState({validEmail: true }) : this.setState({ validEmail: false })
  }

  validatePhone(event) {
      /* eslint-disable */
    const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
    this.setState({ phone: event.target.value }) 
    return regex.test(event.target.value) ? this.setState({ validPhone: true }) : this.setState({ validPhone: false })
  }
  renderAppointmentConfirmation() {
    const spanStyle = { color: '#3483ec' }
    return <section>
      <p>Name: <span style={spanStyle}>{this.state.firstName} {this.state.lastName}</span></p>
      <p>Number: <span style={spanStyle}>{this.state.phone}</span></p>
      <p>Email: <span style={spanStyle}>{this.state.email}</span></p>
      <p>Appointment: <span style={spanStyle}>{moment(this.state.appointmentDate).format('dddd[,] MMMM Do[,] YYYY')}</span> at <span style={spanStyle}>{moment().hour(9).minute(0).add(this.state.appointmentSlot, 'hours').format('h:mm a')}</span></p>
    </section>
  }
  
  handleSubmit() {
    const appointment = {
      date: moment(this.state.appointmentDate).format('YYYY-DD-MM'),
      slot: this.state.appointmentSlot,
      name: this.state.firstName + ' ' + this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    }
    console.log(appointment)
  }

  render() {
    const {stepIndex, smallScreen,loading, confirmationModalOpen} = this.state
    const contactFormFilled = this.state.firstName && this.state.lastName && this.state.phone && this.state.email && this.state.validPhone && this.state.validEmail
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onClick={() => this.setState({ confirmationModalOpen : false})} />,
      <Button color="primary" 
        onClick={() => this.handleSubmit()} >Confirm</Button>
    ]
    return (
      <MuiThemeProvider>
      <div>
        <section style={{
            maxWidth: !smallScreen ? '80%' : '100%',
            margin: 'auto',
            marginTop: !smallScreen ? 20 : 0,
          }}>
          {this.renderConfirmationString()}
          <Card style={{
              padding: '10px 10px 25px 10px',
              height: smallScreen ? '100vh' : null
            }}>
            <Stepper  activeStep={stepIndex} linear={false} orientation="vertical">
              <Step disabled={loading}>
                <StepLabel onClick={() => this.updateStep(0)}>
                  Choose an available day for your appointment
                </StepLabel>
                <StepContent>
                    <Calendar minDate = {new Date()} onChange={(date) => this.handleSetAppointmentDate(date)} value={this.state.appointmentDate} />
                  </StepContent>
              </Step>
              <Step disabled={ !this.state.appointmentDate }>
                <StepLabel onClick={() => this.updateStep(1)}>
                  Choose an available time for your appointment
                </StepLabel>
                <StepContent>
                  <SelectField floatingLabelText="AM or PM" value={this.state.appointmentMeridiem}
                    onChange={(evt, key, payload) => this.handleSetAppointmentMeridiem(payload)}
                    selectionRenderer={value => value ? 'PM' : 'AM'}>
                    <MenuItem value={0}>AM</MenuItem>
                    <MenuItem value={1}>PM</MenuItem>
                  </SelectField>
                  <RadioButtonGroup 
                    style={{ marginTop: 15,
                             marginLeft: 15
                           }}
                    name="appointmentTimes"
                    defaultSelected={this.state.appointmentSlot}
                    onChange={(evt, val) => this.handleSetAppointmentSlot(val)}>
                    {this.renderAppointmentTimes()}
                  </RadioButtonGroup>
                </StepContent>
              </Step>
              <Step disabled={ !Number.isInteger(this.state.appointmentSlot) }>
                <StepLabel onClick={() => this.updateStep(2)}>
                  Share your contact information with us and we'll send you a reminder
                </StepLabel>
                <StepContent>
                  <section>
                  <Grid container spacing={2}>
                  <Grid item xs={12}  sm={6}>
                    <TextField  multiline fullWidth size ='medium' style={{ display: 'block' }} name="first_name" hintText="First Name" value = {this.state.firstName}
                      label="First Name"  onChange={(evt) => this.setState({ firstName: evt.target.value })}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField  multiline fullWidth style={{ display: 'block' }} name="last_name"  hintText="Last Name"  value = {this.state.lastName}
                      label="Last Name" onChange={(evt) => this.setState({ lastName: evt.target.value })}/>
                   </Grid>
                   <Grid item xs={12} sm={6}>
                    <TextField  multiline fullWidth style={{ display: 'block' }} name="email" hintText="name@mail.com"  value = {this.state.email}
                      label="Email" error= {!this.state.validEmail} helperText={this.state.validEmail ? null : 'Enter a valid email address'}
                      onChange={(evt) => this.validateEmail(evt)}/>
                   </Grid>
                   <Grid item xs={12} sm={6}>
                    <TextField multiline fullWidth  style={{ display: 'block' }} name="phone" hintText="(888) 888-8888"  value = {this.state.phone}
                      label="Phone" error= {!this.state.validPhone} helperText={this.state.validPhone ? null: 'Enter a valid phone number'}
                      onChange={(evt) => this.validatePhone(evt)} />
                   </Grid>
                   <Grid item xs={12} >
                    <Button labelPosition="before" color="primary"  fullWidth variant="contained"
                      onClick={() => this.setState({ confirmationModalOpen: !this.state.confirmationModalOpen })}
                      disabled={!contactFormFilled } style={{ marginTop: 20, maxWidth: "100%", display: 'block'}} >
                      {contactFormFilled ? 'Schedule' : 'Fill out your information to schedule'}</Button>
                 </Grid>
                 </Grid>
                  </section>
                </StepContent>
              </Step>
            </Stepper>
          </Card>
          <Dialog modal={true} open={confirmationModalOpen} actions={modalActions} title="Confirm your appointment">
            {this.renderAppointmentConfirmation()}
          </Dialog>
        </section>
      </div>
      </MuiThemeProvider>
    )
  }
}