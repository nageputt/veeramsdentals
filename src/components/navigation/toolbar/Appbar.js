import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
        return (
      <div className= 'toolbar-main-div'>
      <AppBar position="static" style={{ background: '#2E3B55', height:'65px' }} >
      <Toolbar>
      <div className = 'logo-div'>
        <img src="favicon.jpg" alt="logo" className='logo' ></img>
      </div>
      
      {headerList.map(item => (
        <Navbar title = {item.name} listIndex = {item.id} selected ={this.state.selectedIndex === '0'}  handleListItemClick ={(event) => this.handleListItemClick(event, '0')}/>
      ))}
      <div className = 'book-button-div'>
        <Button variant="contained" color="primary"  style={{ borderRadius: 25 } }startIcon={<EventNoteRoundedIcon />}> BOOK APPOINTMENT </Button>
      </div>
      </Toolbar>
      </AppBar>
      </div>
        );
    }
}
Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default withStyles({ withTheme: true })(Appbar);