import React from "react";

const moods = ["Work", "Date", "QuickBite", "Budget"];

export default function SearchMood({ onSelect }) {
  return (
    <div>
      {moods.map((mood) => (
        <button key={mood} onClick={() => onSelect(mood)}>
          {mood}
        </button>
      ))}
    </div>
  );
}