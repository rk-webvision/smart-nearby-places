export async function fetchPlaces(location, type) {
  const response = await fetch(
    `/api/places?lat=${location.lat}&lng=${location.lng}&type=${type}`
  );

  return response.json();
}