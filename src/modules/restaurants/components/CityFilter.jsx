import React from 'react';

export default function CityFilter({ cities, selectedCity, onCityChange }) {
  return (
    <div className="mb-4">
      <label htmlFor="city-select" className="block text-[#484848] font-medium mb-2">
        Find restaurants in:
      </label>
      <select
        id="city-select"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="input-primary cursor-pointer"
      >
        <option value="">All Cities</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}