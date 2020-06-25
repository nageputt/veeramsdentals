import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 16.3156542, lng: 80.437022}}
    >
        <Marker name={'Veeram\'s Dental Clinic'}
          position={{
            lat: 16.3156542, lng: 80.437022
          }}
          onClick={() => {
            setSelectedPark('Veeram\'s Dental Clinic');
          }}
        />

      {selectedPark && (
        <InfoWindow visible={false}  onCloseClick={() => { setSelectedPark(null);}}
          position={{
            lat: 16.3156542, lng: 80.437022
          }}
        >
          <div>
            <h2>{selectedPark}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MapContainer() {
  return (
    <div style={{ width: "50vw", height: "50vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCJeInUgOe6FAV2yVL4E625fOwaZIr7Cow`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}