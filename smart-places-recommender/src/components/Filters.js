export default function Filters({ setFilter }) {
  return (
    <div>
      <h3>Filters</h3>

      <button onClick={() => setFilter("rating")}>
        ⭐ Top Rated
      </button>

      <button onClick={() => setFilter("distance")}>
        📍 Nearest
      </button>

      <button onClick={() => setFilter("open")}>
        🟢 Open Now
      </button>
    </div>
  );
}