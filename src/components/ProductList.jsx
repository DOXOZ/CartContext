import React from 'react';
import FilterButtons from './FilterButton';
import ProductItem from './ProductCard';
import './ProductList.css'; // для стилей списка

const ProductList = ({ products, selectedCategory, onFilter }) => {
  return (
    <div>
      <FilterButtons
        selectedCategory={selectedCategory}
        onFilter={onFilter}
      />
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
