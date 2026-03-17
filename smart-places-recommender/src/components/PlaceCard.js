// Component to display individual place details
export default function PlaceCard({ place }) {

  return (
    <div className="bg-white p-4 mb-3 rounded-xl shadow hover:shadow-lg transition">

      {/* Place name */}
      <h3 className="font-semibold text-lg">
        {place.name}
      </h3>

      {/* Address */}
      <p className="text-sm text-gray-600">
        📍 {place.vicinity}
      </p>

      {/* Rating and distance */}
      <div className="flex justify-between mt-2 text-sm">
        <span>⭐ {place.rating || "N/A"}</span>
        <span>📏 {place.distance} km</span>
      </div>

      {/* Open / closed status */}
      <p className="mt-2">
        {place.opening_hours?.open_now
          ? "🟢 Open"
          : "🔴 Closed"}
      </p>

    </div>
  );
}