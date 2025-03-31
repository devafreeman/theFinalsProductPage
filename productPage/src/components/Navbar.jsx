import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Product Page</h1>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;