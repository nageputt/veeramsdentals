import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import './ResponseForm.css';
import axios from 'axios';

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
  const phoneRegex = /^\d{10}$/;
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
class ResponseForm extends React.Component {
    constructor(props) {
      super(props);
       this.state={
           name :'',
           number:'',
           email:'',
           desc:'',
           formErrors: {
            name: "",
            number: "",
            email: "",
            desc: ""
          }
          

    };
    }

   async handleSubmit (e) {
        let formErrors = { ...this.state.formErrors };
        const { name,number,email,desc } = this.state;
        formErrors.email = emailRegex.test(email) ? "" : "invalid email address";
        formErrors.number = number.length === 10 ? "" : "invalid number";
        this.setState({formErrors:formErrors});
        //const form = await axios.post('/api/form',{name,email,number})
       
      };

    handleChange(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value });
      }

  render() {
    const { formErrors } = this.state;
   return(
    <Paper className={classes.mainPaper} elevation={3} maxWidth="m" >
    <Container component="main" maxWidth="m">
    <CssBaseline />
    <div className={classes.paper}>
        <Typography className = 'quotediv' component="h1" variant="h4">
         Get Quote
        </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField  multiline  name="name" value ={this.state.name} onChange={(e) => this.handleChange(e)}  required fullWidth id="name" label="Name" autoFocus/>
          </Grid>
          <Grid item xs={12} >
            <TextField multiline  required fullWidth id="number" label="Phone Number" value={this.state.number} onChange={(e) => this.handleChange(e)}  name="number" />
            {formErrors.number.length > 0 && (
                <span className="errorMessage">{formErrors.number}</span>)}
          </Grid>
          <Grid item xs={12}>
            <TextField multiline  required fullWidth id="email" label="Email Address" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
            {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>)}
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