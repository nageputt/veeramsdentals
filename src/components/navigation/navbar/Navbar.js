import React from 'react';
import Link from '@material-ui/core/Link';
import './Navbar.css';


class Navbar extends React.Component {
   
    
    render(){
    return (
        <div className ='toolbarLink'>
         <Link color="inherit" noWrap key={this.props.title}  variant="body1" href={this.props.title} className='toolbarLink'
         onClick={(event) => this.props.handleListItemClick(event, this.props.listIndex)}>
            {this.props.title}
        </Link>
         </div>
    )
    }
}


export default Navbar;