// Component to allow user to select mood
export default function SearchMood({ onSelect }) {

  const moods = ["Work", "Date", "Quick Bite", "Budget"];

  return (
    <div className="flex justify-center gap-2 flex-wrap">

      {/* Render mood buttons */}
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onSelect(mood)}
          className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
        >
          {mood}
        </button>
      ))}

    </div>
  );
}