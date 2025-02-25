import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    clearCart,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-footer">
            <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
            <button className="cart-clear" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
