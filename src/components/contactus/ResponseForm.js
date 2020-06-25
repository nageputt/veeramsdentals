import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import './ResponseForm.css';

const classes = makeStyles(theme => ({
    mainPaper:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'60%'
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: '10px',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

class ResponseForm extends React.Component {
    constructor(props) {
      super(props);
       this.state={
           name :'',
           number:'',
           email:'',
           desc:'',
           validEmail: true,
           validPhone: true,
    };
    }

   async handleSubmit (e) {
        
       
      };

    handleChange(e) {
        e.preventDefault();
        if(e.target.name === 'email'){
          this.validateEmail(e);
        }else if (e.target.name === 'number'){
          this.validatePhone(e);
        }else{
          this.setState({[e.target.name]: e.target.value });
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

  render() {
   return(
    <Paper className={classes.mainPaper} elevation={3} maxWidth="m" >
    <Container component="main" maxWidth="m">
   
    <div className={classes.paper}>
        <Typography className = 'quotediv' component="h1" variant="h4">
         Get Quote
        </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField  multiline  name="name" value ={this.state.name} onChange={(e) => this.handleChange(e)}  required fullWidth id="name" label="Name" />
          </Grid>
          <Grid item xs={12} >
            <TextField multiline  required fullWidth id="number" label="Phone Number" value={this.state.number} onChange={(e) => this.handleChange(e)}  name="number"  errorText={this.state.validPhone ? null : 'Enter a valid Phone Number'} />
          </Grid>
          <Grid item xs={12}>
            <TextField multiline   fullWidth id="email" label="Email Address" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)}  errorText={this.state.validEmail ? null : 'Enter a valid Email Address'}/>
          </Grid>
          <Grid item xs={12}>
            <TextField multiline rows={4} rowsMax={5} fullWidth name="desc" label="How can we help you?" id="desc" value ={this.state.desc} onChange={(e) => this.handleChange(e)}  placeholder='I was wondering about availability and rates. I need help with the following:'  />
          </Grid>
          <Grid item xs={12} alignItems = 'right'>
          <Button variant="contained" color="primary" className={classes.submit} onClick ={() => this.handleSubmit()} >  Send Message </Button>
          </Grid>
        </Grid>
        
      </form>
    </div>
  </Container>
  </Paper>
   );
  }
  }
  
  export default ResponseForm;