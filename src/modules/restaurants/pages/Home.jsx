import React, { useState, useEffect } from 'react';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';
import RestaurantCard from '../components/RestaurantCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import CityFilter from '../components/CityFilter';
import MapView from '../components/MapView';
import { restaurants, categories, cities } from '../data/mockData';
import { FiMap, FiList } from 'react-icons/fi';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'

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
    
    setFilteredRestaurants(results);
  }, [searchTerm, selectedCategory, selectedCity]);

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
        
        <div className="flex items-center justify-between">
          <button
            onClick={toggleViewMode}
            className="btn-secondary flex items-center cursor-pointer"
          >
            {viewMode === 'list' ? (
              <>
                <FiMap className="mr-2" /> Show Map View
              </>
            ) : (
              <>
                <FiList className="mr-2" /> Show List View
              </>
            )}
          </button>
          
          {(searchTerm || selectedCategory || selectedCity) && (
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
          )}
        </div>
      </div>
      
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
          <MapView restaurants={filteredRestaurants} height="500px" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}