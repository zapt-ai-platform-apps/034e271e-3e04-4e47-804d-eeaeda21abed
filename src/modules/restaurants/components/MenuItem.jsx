import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function MenuItem({ item, onAddToCart }) {
  const { name, description, price, image } = item;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex">
      <div className="p-4 flex-grow">
        <h3 className="font-medium text-[#484848]">{name}</h3>
        <p className="text-[#767676] text-sm my-1 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-medium text-[#484848]">${price.toFixed(2)}</span>
          <button 
            onClick={onAddToCart}
            className="p-2 rounded-full bg-[#FF5A5F] text-white hover:bg-[#FF4247] transition-colors cursor-pointer"
          >
            <FiPlus size={16} />
          </button>
        </div>
      </div>
      <div className="w-24 h-24 shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}