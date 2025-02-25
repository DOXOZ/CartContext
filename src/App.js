import React from 'react';
import ProductListContainer from './components/ProductListContainer';
import Cart from './components/Cart';
import CartProvider from './context/CartProvider';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <ProductListContainer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
