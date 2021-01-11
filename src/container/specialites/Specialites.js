import React, { Component } from 'react';
import GridDynamicRenderer from '../../components/Grid/GridDynamicRenderer';
import axios from 'axios';

class Specialites extends Component {
    state = {
      cardDetails: []
    }
    componentDidMount(){
      axios.get("https://react-burger-b72df.firebaseio.com/treatments.json",{
      }).then(response =>{
        this.setState({cardDetails:response.data});
      }).catch(error => {
        alert();
      });
    }
    render () {
        return (
            <div>
                {/*<SpecialitesTab/>*/}
                <GridDynamicRenderer 
                    gridDetails={this.state.cardDetails} isSpecialites={true}/>
            </div>
        );
    }
}


export default Specialites;