export default function PlaceCard({ place }) {
  return (
    <div className="card">
      <h3>{place.name}</h3>
      <p>⭐ {place.rating}</p>
      <p>{place.vicinity}</p>
    </div>
  );
}