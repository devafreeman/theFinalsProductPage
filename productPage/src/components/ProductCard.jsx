import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} style={{ height: '150px' }} />
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating.rate}</p>
      </Link>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;