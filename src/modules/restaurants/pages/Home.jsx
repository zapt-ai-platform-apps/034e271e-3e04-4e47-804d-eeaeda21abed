import React, { useState, useEffect } from 'react';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';
import RestaurantCard from '../components/RestaurantCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import CityFilter from '../components/CityFilter';
import MapView from '../components/MapView';
import AiAssistant from '../components/AiAssistant';
import { restaurants, categories, cities } from '../data/mockData';
import { sortByDistance } from '../utils/distanceCalculator';
import useLocation from '../hooks/useLocation';
import { FiMap, FiList, FiMapPin, FiCompass } from 'react-icons/fi';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'
  const [sortMode, setSortMode] = useState('default'); // 'default', 'distance'
  
  const { 
    userLocation, 
    loading: locationLoading, 
    error: locationError, 
    locationPermission,
    getUserLocation 
  } = useLocation();

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter restaurants based on search term, selected category, and city
    let results = restaurants;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchLower) || 
        restaurant.cuisine.toLowerCase().includes(searchLower) ||
        restaurant.categories.some(cat => cat.toLowerCase().includes(searchLower))
      );
    }
    
    if (selectedCategory) {
      results = results.filter(restaurant => 
        restaurant.categories.includes(selectedCategory)
      );
    }
    
    if (selectedCity) {
      results = results.filter(restaurant => 
        restaurant.location.city === selectedCity
      );
    }
    
    // Sort by distance if needed
    if (sortMode === 'distance' && userLocation) {
      results = sortByDistance(results, userLocation);
    }
    
    setFilteredRestaurants(results);
  }, [searchTerm, selectedCategory, selectedCity, sortMode, userLocation]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'list' ? 'map' : 'list');
  };

  const handleSortModeChange = () => {
    if (sortMode === 'default') {
      if (!userLocation) {
        getUserLocation();
      }
      setSortMode('distance');
    } else {
      setSortMode('default');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#484848] mb-2">Pakistani Food Delivery</h1>
        <p className="text-[#767676]">Discover and order from the best Pakistani restaurants</p>
      </div>
      
      <div className="mb-4">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <CityFilter 
          cities={cities} 
          selectedCity={selectedCity} 
          onCityChange={handleCityChange} 
        />
        
        <div className="flex items-center justify-between space-x-2">
          <button
            onClick={toggleViewMode}
            className="btn-secondary flex items-center cursor-pointer"
          >
            {viewMode === 'list' ? (
              <>
                <FiMap className="mr-2" /> Show Map
              </>
            ) : (
              <>
                <FiList className="mr-2" /> Show List
              </>
            )}
          </button>
          
          <button
            onClick={handleSortModeChange}
            className={`flex items-center cursor-pointer ${
              sortMode === 'distance' 
                ? 'btn-primary' 
                : 'btn-secondary'
            }`}
            title={
              !userLocation && sortMode !== 'distance' 
                ? 'Enable location to sort by distance' 
                : sortMode === 'distance' 
                  ? 'Using your location' 
                  : 'Sort by distance from you'
            }
          >
            {locationLoading ? (
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                Loading...
              </div>
            ) : (
              <>
                {sortMode === 'distance' ? <FiMapPin className="mr-2" /> : <FiCompass className="mr-2" />}
                {sortMode === 'distance' ? 'Sorting by Distance' : 'Sort by Distance'}
              </>
            )}
          </button>
          
          {(searchTerm || selectedCategory || selectedCity || sortMode === 'distance') && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSelectedCity('');
                setSortMode('default');
              }} 
              className="text-[#FF5A5F] font-medium cursor-pointer whitespace-nowrap"
            >
              Clear All
            </button>
          )}
        </div>
      </div>
      
      {locationError && (
        <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700">{locationError}</p>
          <button 
            onClick={getUserLocation}
            className="mt-2 text-red-600 underline cursor-pointer"
          >
            Try Again
          </button>
        </div>
      )}
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#484848] mb-4">Browse by Category</h2>
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-[#484848] mb-4">
          {selectedCity 
            ? `Restaurants in ${selectedCity}` 
            : selectedCategory 
              ? `${selectedCategory} Restaurants` 
              : searchTerm 
                ? `Search Results for "${searchTerm}"` 
                : sortMode === 'distance'
                  ? "Restaurants Near You"
                  : "All Restaurants"}
        </h2>
        
        {filteredRestaurants.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-[#767676] mb-2">No restaurants found</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSelectedCity('');
              }} 
              className="text-[#FF5A5F] font-medium cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : viewMode === 'map' ? (
          <MapView 
            restaurants={filteredRestaurants} 
            height="500px" 
            userLocation={userLocation}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard 
                key={restaurant.id} 
                restaurant={restaurant} 
                userLocation={userLocation}
              />
            ))}
          </div>
        )}
      </div>
      
      <AiAssistant />
    </div>
  );
}