import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 18.5204,
  lng: 73.8567,
};

function MapView({ places }) {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {places.map((place, index) => (
          <Marker
            key={index}
            position={{
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng,
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapView;