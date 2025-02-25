import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img
        className="cart-item__image"
        src={item.image}
        alt={item.title}
      />

      <div className="cart-item__info">
        <p className="cart-item__category">{item.category}</p>
        <h4 className="cart-item__title">{item.title}</h4>

        <div className="cart-item__bottom-row">
          <p className="cart-item__price">${item.price.toFixed(2)}</p>
        </div>
        <div className="cart-item__quantity-block">
            <button
              className="quantity-block__btn"
              onClick={() => decrementQuantity(item.id)}
            >
              -
            </button>
            <span className="quantity-block__number">
              {item.quantity}
            </span>
            <button
              className="quantity-block__btn"
              onClick={() => incrementQuantity(item.id)}
            >
              +
            </button>
          </div>
      </div>
    </div>
  );
};

export default CartItem;
