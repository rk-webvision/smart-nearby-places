import React, { useState, useEffect } from "react";
import SearchMood from "./components/SearchMood";
import MapView from "./components/MapView";
import PlaceCard from "./components/PlaceCard";
import Filters from "./components/Filters";
import { calculateDistance } from "./utils/distance";

function App() {

  // Stores list of places fetched from Google Places API
  const [places, setPlaces] = useState([]);

  // Stores selected mood mapped to Google place type (cafe, restaurant, etc.)
  const [moodType, setMoodType] = useState(null);

  // Stores user's current geolocation
  const [location, setLocation] = useState(null);

  // Stores active filter (rating, distance, open)
  const [filter, setFilter] = useState(null);

  // Get user's current location using browser API
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  }, []);

  // Map user mood to Google Places API type
  const handleMoodSelect = (mood) => {
    const mapping = {
      Work: "cafe",
      Date: "restaurant",
      "Quick Bite": "restaurant",
      Budget: "restaurant",
    };

    setMoodType(mapping[mood]);
  };

  // Add distance (km) to each place using Haversine formula
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

  // Apply filters (sorting + filtering logic)
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
    <div className="min-h-screen p-4">

      {/* App title */}
      <h1 className="text-2xl font-bold text-center mb-4">
        Smart Nearby Places
      </h1>

      {/* Mood selection buttons */}
      <SearchMood onSelect={handleMoodSelect} />

      {/* Filter buttons */}
      <Filters setFilter={setFilter} />

      {/* Layout: Map + List */}
      <div className="grid md:grid-cols-2 gap-4 mt-4">

        {/* Map section */}
        <div className="bg-white rounded-xl shadow">
          <MapView
            places={finalPlaces}
            setPlaces={setPlaces}
            moodType={moodType}
            location={location}
          />
        </div>

        {/* Places list */}
        <div className="h-[400px] overflow-y-auto">
          {finalPlaces.map((place, index) => (
            <PlaceCard key={index} place={place} />
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;