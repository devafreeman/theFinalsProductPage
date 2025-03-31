import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../components/ProductContext';
import { useCart } from '../components/CartContext';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} style={{ height: '100px' }} />
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating.rate}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;