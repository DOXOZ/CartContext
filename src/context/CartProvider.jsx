import React, { useState } from 'react';
import { CartContext } from './CartContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Если товар уже есть в корзине, увеличиваем количество
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Иначе добавляем новый товар с quantity=1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) => {
      const targetItem = prevItems.find((item) => item.id === id);
      if (targetItem && targetItem.quantity > 1) {
        // Если количество больше 1, просто уменьшаем
        return prevItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Если количество становится 0, удаляем товар из корзины
        return prevItems.filter((item) => item.id !== id);
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
