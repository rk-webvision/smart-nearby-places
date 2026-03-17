// Component for filtering places based on user preference
export default function Filters({ setFilter }) {

  return (
    <div className="flex justify-center gap-2 mt-3">

      {/* Sort by rating */}
      <button
        onClick={() => setFilter("rating")}
        className="px-3 py-1 bg-yellow-400 rounded-full"
      >
        ⭐ Top Rated
      </button>

      {/* Sort by nearest distance */}
      <button
        onClick={() => setFilter("distance")}
        className="px-3 py-1 bg-green-400 rounded-full"
      >
        📍 Nearest
      </button>

      {/* Filter open places */}
      <button
        onClick={() => setFilter("open")}
        className="px-3 py-1 bg-purple-500 text-white rounded-full"
      >
        🟢 Open Now
      </button>

    </div>
  );
}