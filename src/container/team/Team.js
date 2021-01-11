import axios from 'axios';
import React, { Component } from 'react';
import GridDynamicRenderer from '../../components/Grid/GridDynamicRenderer';

class Team extends Component {
    state = {
        teamDetails: []
    }
      componentDidMount(){
        axios.get("https://react-burger-b72df.firebaseio.com/team.json",{
        }).then(response =>{
          this.setState({teamDetails:response.data});
        }).catch(error => {
          alert();
        });
      }
    render () {
        return (
            <div>
                <GridDynamicRenderer teamDetails={this.state.teamDetails}/>
            </div>
        );
    }
}


export default Team;