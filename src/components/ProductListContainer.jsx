import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Spinner from './Spinner';

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const newFiltered = products.filter(
        (item) => item.category === category
      );
      setFilteredProducts(newFiltered);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <ProductList
      products={filteredProducts}
      selectedCategory={selectedCategory}
      onFilter={handleFilter}
    />
  );
};

export default ProductListContainer;
