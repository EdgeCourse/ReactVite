// src/components/Product.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    stock: number;
  };
  onBack: () => void;
}

const Product: React.FC<ProductProps> = ({ product, onBack }) => {
  const [productData, setProductData] = useState(product);

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/products/${productData.id}`, productData);
      console.log('Product updated:', response.data);
      onBack();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
};

export default Product;
