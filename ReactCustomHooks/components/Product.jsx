
// src/components/Product.js
import React, { useState, useEffect } from 'react';

function Product({ product, onBack }) {
  const [productData, setProductData] = useState(product);

  useEffect(() => {
    setProductData(product); // Important: Update productData when the 'product' prop changes
  }, [product]);


  const handleSave = () => {
    fetch(`http://localhost:5000/products/${productData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product updated:', data);
      onBack();
    })
    .catch(error => console.error('Error updating product:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h2>Edit Product</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={productData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={productData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={productData.price} onChange={handleChange} />
        </div>
        <div>
          <label>Stock:</label>
          <input type="number" name="stock" value={productData.stock} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSave}>Save</button>
        <button type="button" onClick={onBack}>Back to list</button>
      </form>
    </div>
  );
}

export default Product;