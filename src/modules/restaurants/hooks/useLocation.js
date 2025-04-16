import { useState, useEffect } from 'react';
import * as Sentry from "@sentry/browser";

export default function useLocation() {
  const [userLocation, setUserLocation] = useState(null);
  const [locationPermission, setLocationPermission] = useState('prompt');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserLocation = async () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        });
      });

      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setLocationPermission('granted');
    } catch (error) {
      console.error('Error getting location:', error);
      
      Sentry.captureException(error, {
        extra: { context: 'useLocation hook' }
      });
      
      if (error.code === 1) {
        setLocationPermission('denied');
        setError('Location permission denied. Please enable location services.');
      } else if (error.code === 2) {
        setError('Location information is unavailable.');
      } else if (error.code === 3) {
        setError('Location request timed out.');
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check for permission status on mount
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'geolocation' }).then(result => {
        setLocationPermission(result.state);
        
        // Listen for permission changes
        result.onchange = function() {
          setLocationPermission(this.state);
        };
        
        // If already granted, get location
        if (result.state === 'granted') {
          getUserLocation();
        }
      });
    }
  }, []);

  return {
    userLocation,
    loading,
    error,
    locationPermission,
    getUserLocation
  };
}