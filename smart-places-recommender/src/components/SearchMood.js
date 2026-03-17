import React from "react";

const moods = ["Work", "Date", "Quick Bite", "Budget"];

export default function SearchMood({ onSelect }) {
  return (
    <div>
      <h3>Select Mood</h3>
      {moods.map((mood) => (
        <button key={mood} onClick={() => onSelect(mood)}>
          {mood}
        </button>
      ))}
    </div>
  );
}