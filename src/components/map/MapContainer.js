import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
  render() {
    return (
      <div className='mapDiv'>
      <Map google={this.props.google}  zoom={20}  style={mapStyles} initialCenter={{ lat: 16.3156542, lng: 80.437022}} >
         <Marker name={'Veeram\'s Dental Clinic'} />
        <InfoWindow marker={this.state.activeMarker} style={mapStyles} visible={this.state.showingInfoWindow} onClose={this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJeInUgOe6FAV2yVL4E625fOwaZIr7Cow'
})(MapContainer);