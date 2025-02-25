import React from 'react';
import './FilterButton.css';

const categories = [
  'All',
  "men's clothing",
  "women's clothing",
  'electronics',
  'jewelery',
];

const FilterButtons = ({ selectedCategory, onFilter }) => {
  return (
    <div className="filter-buttons-wrapper">
      {categories.map((cat) => {
        const isActive = cat === selectedCategory;
        return (
          <button
            key={cat}
            onClick={() => onFilter(cat)}
            className={`filter-button ${isActive ? 'active' : ''}`}
          >
            {cat === 'All' ? 'All Products' : cat}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
