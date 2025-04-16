import { getDistance } from 'geolib';

export function calculateDistance(origin, destination) {
  if (!origin || !destination) return null;
  
  try {
    // Calculate distance in meters
    const distanceInMeters = getDistance(
      { latitude: origin.lat, longitude: origin.lng },
      { latitude: destination.lat, longitude: destination.lng }
    );
    
    // Convert to kilometers
    const distanceInKm = distanceInMeters / 1000;
    
    if (distanceInKm < 1) {
      // Return in meters if less than 1 km
      return {
        value: distanceInMeters,
        unit: 'm',
        formatted: `${distanceInMeters} m`
      };
    }
    
    // Return in kilometers otherwise
    return {
      value: distanceInKm,
      unit: 'km',
      formatted: `${distanceInKm.toFixed(1)} km`
    };
  } catch (error) {
    console.error('Error calculating distance:', error);
    return null;
  }
}

export function sortByDistance(restaurants, userLocation) {
  if (!userLocation || !restaurants.length) return restaurants;
  
  return [...restaurants].sort((a, b) => {
    const distanceA = getDistance(
      { latitude: userLocation.lat, longitude: userLocation.lng },
      { latitude: a.location.coordinates.lat, longitude: a.location.coordinates.lng }
    );
    
    const distanceB = getDistance(
      { latitude: userLocation.lat, longitude: userLocation.lng },
      { latitude: b.location.coordinates.lat, longitude: b.location.coordinates.lng }
    );
    
    return distanceA - distanceB;
  });
}