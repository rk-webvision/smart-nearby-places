import React, { useState } from "react";
import "./App.css";
import SearchMood from "./components/SearchMood";
import MapView from "./components/MapView";
import PlaceCard from "./components/PlaceCard";

function App() {

  const [places, setPlaces] = useState([]);

  const handleMoodSelect = (mood) => {

    // Temporary mock data (later we will fetch from Google Places API)
    const mockPlaces = [
      {
        name: "Cafe Coffee Day",
        rating: 4.2,
        vicinity: "FC Road",
        geometry: {
          location: { lat: 18.5204, lng: 73.8567 }
        }
      },
      {
        name: "Starbucks",
        rating: 4.5,
        vicinity: "Koregaon Park",
        geometry: {
          location: { lat: 18.5362, lng: 73.8930 }
        }
      },
      {
        name: "McDonald's",
        rating: 4.0,
        vicinity: "JM Road",
        geometry: {
          location: { lat: 18.5308, lng: 73.8475 }
        }
      }
    ];

    setPlaces(mockPlaces);
  };

  return (
    <div className="App">

      <h1>Smart Nearby Places Recommender</h1>

      <SearchMood onSelect={handleMoodSelect} />

      <MapView places={places} />

      <div className="places-list">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>

    </div>
  );
}

export default App;