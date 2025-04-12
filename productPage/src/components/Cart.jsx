import React from 'react';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;