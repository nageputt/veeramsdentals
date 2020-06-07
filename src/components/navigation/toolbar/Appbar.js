import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Navbar from '../navbar/Navbar';
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import './Appbar.css';

const headerList = [
  { id: 1, name: "HOME"},
  { id: 2, name: "SPECIALITES"},
  { id: 3, name: "OUR TEAM"},
  { id: 4, name: "CONTACT US"}
];

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  }
}));

class Appbar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        selectedIndex:0,
    };
  }
   handleListItemClick = (event, index) => {
    this.setState({selectedIndex:index});
  };
    render () {
      const { classes } = this.props;
        return (
          <React.Fragment>
            <AppBar position="static" style={{ background: '#2E3B55', height:'45px', marginTop:'2px'}} >
               <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                  <img src="favicon.jpg" alt="logo" className='logo' ></img>
                  {headerList.map(item => (<Navbar title = {item.name} key = {item.id} listIndex = {item.id} selected ={this.state.selectedIndex === item.id}  handleListItemClick ={(event) => this.handleListItemClick(event, item.id)}/>))}
                  <Button variant="contained" color="primary"  style={{ borderRadius: 25 } }startIcon={<EventNoteRoundedIcon />}> BOOK APPOINTMENT </Button>
               </Toolbar>
            </AppBar>
          </React.Fragment>
        );
    }
}
Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default withStyles(useStyles,{ withTheme: true })(Appbar);