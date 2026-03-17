import React, { useState, useEffect } from "react";
import "./App.css";
import SearchMood from "./components/SearchMood";
import MapView from "./components/MapView";
import PlaceCard from "./components/PlaceCard";

function App() {

  const [places, setPlaces] = useState([]);
  const [moodType, setMoodType] = useState(null);
  const [location, setLocation] = useState(null);

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {

      const userLocation = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };

      setLocation(userLocation);
    });
  }, []);

  // Mood → Google type mapping
  const handleMoodSelect = (mood) => {

    const mapping = {
      Work: "cafe",
      Date: "restaurant",
      "Quick Bite": "restaurant",  // fixed
      Budget: "restaurant",
    };

    const type = mapping[mood];

    setMoodType(type);
  };

  return (
    <div className="App">

      <h1>Smart Nearby Places Recommender</h1>

      <SearchMood onSelect={handleMoodSelect} />

      <MapView
        places={places}
        setPlaces={setPlaces}
        moodType={moodType}
        location={location}
      />

      <div className="places-list">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>

    </div>
  );
}

export default App;