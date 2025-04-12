import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../components/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ height: '300px' }} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        style={{ marginLeft: '10px', width: '50px' }}
      />
      
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ProductDetail;