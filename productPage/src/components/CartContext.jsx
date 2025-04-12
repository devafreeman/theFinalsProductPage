import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        const updatedItems = [...state.cartItems];
        updatedItems[itemIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: action.payload.quantity }] };
      }
    case 'REMOVE_FROM_CART':
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};