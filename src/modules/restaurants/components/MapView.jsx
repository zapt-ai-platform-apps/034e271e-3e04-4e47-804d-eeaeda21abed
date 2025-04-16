import React, { useCallback, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';

const containerStyle = {
  width: '100%',
  height: '100%'
};

export default function MapView({ restaurants, selectedRestaurant, height = '400px', userLocation = null }) {
  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [center, setCenter] = useState({ lat: 30.3753, lng: 69.3451 }); // Pakistan center
  const [zoom, setZoom] = useState(5);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['geometry', 'places']
  });

  useEffect(() => {
    if (selectedRestaurant) {
      setCenter({
        lat: selectedRestaurant.location.coordinates.lat,
        lng: selectedRestaurant.location.coordinates.lng
      });
      setZoom(14);
    } else if (userLocation) {
      setCenter({
        lat: userLocation.lat,
        lng: userLocation.lng
      });
      setZoom(12);
    } else if (restaurants.length > 0) {
      setCenter({
        lat: restaurants[0].location.coordinates.lat,
        lng: restaurants[0].location.coordinates.lng
      });
      setZoom(5);
    }
  }, [selectedRestaurant, restaurants, userLocation]);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const handleMarkerClick = (markerId) => {
    setActiveMarker(markerId === activeMarker ? null : markerId);
  };

  if (loadError) {
    return <div className="bg-red-100 text-red-800 p-4 rounded-lg">Error loading maps</div>;
  }

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center" style={{ height }}>
        <LoadingSpinner size="medium" />
      </div>
    );
  }

  return (
    <div style={{ height }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          zoomControl: true,
        }}
      >
        {userLocation && (
          <MarkerF
            position={{ lat: userLocation.lat, lng: userLocation.lng }}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: '#4285F4',
              fillOpacity: 1,
              strokeColor: '#FFFFFF',
              strokeWeight: 2,
              scale: 8,
            }}
            title="Your location"
          />
        )}

        {restaurants.map(restaurant => (
          <MarkerF
            key={restaurant.id}
            position={{
              lat: restaurant.location.coordinates.lat,
              lng: restaurant.location.coordinates.lng
            }}
            onClick={() => handleMarkerClick(restaurant.id)}
            animation={window.google.maps.Animation.DROP}
          >
            {activeMarker === restaurant.id && (
              <InfoWindowF
                position={{
                  lat: restaurant.location.coordinates.lat,
                  lng: restaurant.location.coordinates.lng
                }}
                onCloseClick={() => setActiveMarker(null)}
              >
                <div className="p-2 max-w-xs">
                  <h3 className="font-medium text-[#484848] mb-1">{restaurant.name}</h3>
                  <p className="text-sm text-[#767676]">{restaurant.location.address}</p>
                  <p className="text-sm text-[#767676] mt-1">{restaurant.cuisine}</p>
                  <div className="mt-2">
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.location.coordinates.lat},${restaurant.location.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#FF5A5F] font-medium"
                    >
                      Get directions
                    </a>
                  </div>
                </div>
              </InfoWindowF>
            )}
          </MarkerF>
        ))}
      </GoogleMap>
    </div>
  );
}