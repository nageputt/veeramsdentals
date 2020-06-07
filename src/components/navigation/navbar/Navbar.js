import React from 'react';
import {List,ListItem,ListItemText,Typography} from '@material-ui/core';
import './Navbar.css';


class Navbar extends React.Component {
    render(){
    return (
        <div className='list-div'>
        <List component="nav" dense style={{ maxWidth: '360px', float:'right'}} key={this.props.listIndex} >
            <ListItem button selected = {this.props.selected}  onClick={(event) => this.props.handleListItemClick(event, this.props.listIndex)}>
                <ListItemText >
                    <Typography style={{ margin: '0px' }} color="inherit" align= 'center' > {this.props.title} </Typography>
                </ListItemText>
            </ListItem>
        </List>
        </div>
    )
    }
}


export default Navbar;