import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Load Places library for nearby search
const libraries = ["places"];

// Map container size
const containerStyle = {
  width: "100%",
  height: "400px",
};

function MapView({ places, setPlaces, moodType, location }) {

  // Store map instance after loading
  const [map, setMap] = useState(null);

  // Fetch nearby places when map, mood, and location are ready
  useEffect(() => {

    if (!map || !moodType || !location) return;

    // Initialize Places service using map instance
    const service = new window.google.maps.places.PlacesService(map);

    const request = {
      location: new window.google.maps.LatLng(location.lat, location.lng),
      radius: 3000,
      type: moodType,
    };

    // Call Google Places API
    service.nearbySearch(request, (results, status) => {

      // If API call successful, update places state
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);
      }
    });

  }, [map, moodType, location, setPlaces]);

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location || { lat: 18.5204, lng: 73.8567 }}
        zoom={14}
        onLoad={(mapInstance) => setMap(mapInstance)}
      >

        {/* Render markers for each place */}
        {places.map((place, index) => (
          <Marker
            key={index}
            position={{
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            }}
          />
        ))}

      </GoogleMap>
    </LoadScript>
  );
}

export default MapView;