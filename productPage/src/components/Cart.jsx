import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Items in Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;