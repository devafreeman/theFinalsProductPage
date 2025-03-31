import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './components/ProductContext';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
