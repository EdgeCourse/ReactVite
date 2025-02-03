import React from 'react';

function Product({ product, onBack }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <button onClick={onBack}>Back to list</button>
    </div>
  );
}

export default Product;