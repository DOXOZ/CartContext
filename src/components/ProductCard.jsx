import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductItem = ({ product }) => {
  const {
    cartItems,
    addToCart,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext);

  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      {/* Верхний контент */}
      <div className="product-card__content">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__title">{product.title}</h3>
      </div>

      {/* Нижняя полоса (цена + кнопка/quantity-block) */}
      <div className="product-card__bottom-row">
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        {!cartItem ? (
          <button
            className="product-card__add-button"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        ) : (
          <div className="product-card__quantity-block">
            <button
              className="quantity-block__btn"
              onClick={() => decrementQuantity(product.id)}
            >
              -
            </button>
            <span className="quantity-block__number">
              {cartItem.quantity}
            </span>
            <button
              className="quantity-block__btn"
              onClick={() => incrementQuantity(product.id)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
