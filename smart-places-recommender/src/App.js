import React, { useState, useEffect } from "react";
import "./App.css";
import SearchMood from "./components/SearchMood";
import MapView from "./components/MapView";
import PlaceCard from "./components/PlaceCard";
import Filters from "./components/Filters";
import { calculateDistance } from "./utils/distance";

function App() {

  const [places, setPlaces] = useState([]);
  const [moodType, setMoodType] = useState(null);
  const [location, setLocation] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const userLocation = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      setLocation(userLocation);
    });
  }, []);

  const handleMoodSelect = (mood) => {
    const mapping = {
      Work: "cafe",
      Date: "restaurant",
      "Quick Bite": "restaurant",
      QuickBite: "restaurant",
      Budget: "restaurant",
    };

    const type = mapping[mood];

    setMoodType(type);
  };

  // Add distance
  const processedPlaces = places.map((place) => {
    const distance = calculateDistance(
      location?.lat,
      location?.lng,
      place.geometry.location.lat(),
      place.geometry.location.lng()
    );

    return {
      ...place,
      distance: distance.toFixed(2),
    };
  });

  // Apply filters
  let finalPlaces = [...processedPlaces];

  if (filter === "rating") {
    finalPlaces.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  if (filter === "distance") {
    finalPlaces.sort((a, b) => a.distance - b.distance);
  }

  if (filter === "open") {
    finalPlaces = finalPlaces.filter(
      (p) => p.opening_hours?.open_now
    );
  }

  return (
    <div className="App">

      <h1>Smart Nearby Places Recommender</h1>

      <SearchMood onSelect={handleMoodSelect} />

      <Filters setFilter={setFilter} />

      <MapView
        places={finalPlaces}
        setPlaces={setPlaces}
        moodType={moodType}
        location={location}
      />

      <div className="places-list">
        {finalPlaces.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>

    </div>
  );
}

export default App;