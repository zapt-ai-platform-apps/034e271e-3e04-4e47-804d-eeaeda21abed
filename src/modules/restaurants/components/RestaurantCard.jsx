import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiClock } from 'react-icons/fi';

export default function RestaurantCard({ restaurant }) {
  const { id, name, image, cuisine, rating, deliveryTime, minOrder } = restaurant;

  return (
    <Link to={`/restaurant/${id}`} className="block restaurant-card">
      <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
        <div className="relative h-48">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-white py-1 px-2 rounded-full text-sm font-medium text-[#484848] shadow-sm flex items-center">
            <FiStar className="text-[#FF5A5F] mr-1" /> {rating}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-[#484848] mb-1">{name}</h3>
          <p className="text-[#767676] text-sm mb-3">{cuisine}</p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-[#767676]">
              <FiClock className="mr-1" /> {deliveryTime} min
            </div>
            <div className="text-[#767676]">Min. ${minOrder}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}