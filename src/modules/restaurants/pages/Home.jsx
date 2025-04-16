import React, { useState, useEffect } from 'react';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';
import RestaurantCard from '../components/RestaurantCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { restaurants, categories } from '../data/mockData';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter restaurants based on search term and selected category
    let results = restaurants;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchLower) || 
        restaurant.cuisine.toLowerCase().includes(searchLower)
      );
    }
    
    if (selectedCategory) {
      results = results.filter(restaurant => 
        restaurant.categories.includes(selectedCategory)
      );
    }
    
    setFilteredRestaurants(results);
  }, [searchTerm, selectedCategory]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
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
        <h1 className="text-3xl font-bold text-[#484848] mb-2">Food Delivery</h1>
        <p className="text-[#767676]">Order food from your favorite restaurants</p>
      </div>
      
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} />
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
          {selectedCategory 
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
              }} 
              className="text-[#FF5A5F] font-medium cursor-pointer"
            >
              Clear filters
            </button>
          </div>
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