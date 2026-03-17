export default function PlaceCard({ place }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      margin: "10px"
    }}>
      <h3>{place.name}</h3>
      <p>⭐ {place.rating || "N/A"}</p>
      <p>📍 {place.vicinity}</p>
      <p>📏 {place.distance} km away</p>
      <p>
        {place.opening_hours?.open_now
          ? "🟢 Open"
          : "🔴 Closed"}
      </p>
    </div>
  );
}