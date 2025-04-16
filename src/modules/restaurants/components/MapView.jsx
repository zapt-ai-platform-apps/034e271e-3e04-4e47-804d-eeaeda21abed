import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for marker icons in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function MapView({ restaurants, selectedRestaurant, height = '400px' }) {
  // Set center to Pakistan if no restaurant is selected
  const defaultCenter = [30.3753, 69.3451]; // Pakistan center
  const defaultZoom = 5;
  
  // Set center to selected restaurant or first restaurant in list
  const center = selectedRestaurant 
    ? [selectedRestaurant.location.coordinates.lat, selectedRestaurant.location.coordinates.lng]
    : restaurants.length > 0 
      ? [restaurants[0].location.coordinates.lat, restaurants[0].location.coordinates.lng]
      : defaultCenter;
  
  const zoom = selectedRestaurant ? 13 : defaultZoom;

  return (
    <div className="rounded-lg overflow-hidden shadow-md" style={{ height }}>
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {restaurants.map(restaurant => (
          <Marker 
            key={restaurant.id}
            position={[restaurant.location.coordinates.lat, restaurant.location.coordinates.lng]}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-medium text-[#484848]">{restaurant.name}</h3>
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
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}