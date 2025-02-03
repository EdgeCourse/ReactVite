import React from 'react';
import products from '../data';

function ProductList({ onSelectProduct }) {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => onSelectProduct(product)}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;