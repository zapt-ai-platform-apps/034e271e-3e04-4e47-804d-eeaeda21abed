import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiStar, FiClock, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { restaurants, getMenuForRestaurant } from '../data/mockData';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';
import MenuItem from '../components/MenuItem';
import { useCart } from '@/modules/cart/context/CartContext';

export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuCategories, setMenuCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const foundRestaurant = restaurants.find(r => r.id === id);
      const menu = getMenuForRestaurant(id);
      
      if (foundRestaurant && menu) {
        setRestaurant(foundRestaurant);
        setMenuItems(menu);
        
        // Extract unique categories from menu items
        const categories = [...new Set(menu.map(item => item.category))];
        setMenuCategories(categories);
        if (categories.length > 0) {
          setActiveCategory(categories[0]);
        }
      }
      
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);

  const handleAddToCart = (item) => {
    if (restaurant) {
      addToCart({
        ...item,
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold text-[#484848] mb-4">Restaurant not found</h2>
        <Link to="/" className="text-[#FF5A5F] font-medium">
          Back to restaurants
        </Link>
      </div>
    );
  }

  const filteredMenuItems = activeCategory 
    ? menuItems.filter(item => item.category === activeCategory)
    : menuItems;

  return (
    <div>
      <Link to="/" className="inline-flex items-center text-[#484848] hover:text-[#FF5A5F] mb-4">
        <FiArrowLeft className="mr-1" /> Back to restaurants
      </Link>
      
      <div className="relative h-64 md:h-80 -mx-4 md:-mx-6 lg:-mx-8">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
          <h1 className="text-3xl font-bold mb-1">{restaurant.name}</h1>
          <p className="text-sm md:text-base mb-2">{restaurant.cuisine}</p>
          <div className="flex items-center text-sm md:text-base space-x-4">
            <div className="flex items-center">
              <FiStar className="mr-1" /> {restaurant.rating}
            </div>
            <div className="flex items-center">
              <FiClock className="mr-1" /> {restaurant.deliveryTime} min
            </div>
            <div>Min. ${restaurant.minOrder}</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <p className="text-[#484848] mb-6">{restaurant.description}</p>
        
        {/* Category Navigation */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#484848] mb-4">Menu</h2>
          <div className="flex overflow-x-auto pb-2 scrollbar-hide space-x-2">
            {menuCategories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-colors ${
                  activeCategory === category
                    ? 'bg-[#FF5A5F] text-white'
                    : 'bg-white text-[#484848] border border-[#DDDDDD] hover:bg-[#F7F7F7]'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMenuItems.map(item => (
            <MenuItem 
              key={item.id} 
              item={item} 
              onAddToCart={() => handleAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}