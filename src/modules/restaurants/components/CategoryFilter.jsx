import React from 'react';

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex overflow-x-auto pb-2 scrollbar-hide space-x-2">
      {categories.map(category => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-colors ${
            selectedCategory === category
              ? 'bg-[#FF5A5F] text-white'
              : 'bg-white text-[#484848] border border-[#DDDDDD] hover:bg-[#F7F7F7]'
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}