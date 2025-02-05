// src/components/ProductList.js
import React, { useEffect, useState } from 'react';

function ProductList({ onSelectProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  };

  const handleDelete = (productId) => {
    fetch(`http://localhost:5000/products/${productId}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchProducts();
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="product-details" onClick={() => onSelectProduct(product)}>
              {product.name}
            </div>
            <div className="product-actions">
              <button onClick={() => onSelectProduct(product)}>Edit</button>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
