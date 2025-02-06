// src/components/ProductForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface ProductFormProps {
  onAddProduct: (product: { id: string; name: string; description: string; price: string; stock: number }) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct, onCancel }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/products', newProduct);
      console.log('Product added:', response.data);
      onAddProduct(response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={newProduct.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={newProduct.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Stock:</label>
          <input type="number" name="stock" value={newProduct.stock} onChange={handleChange} required />
        </div>
        <button type="submit">Add Product</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default ProductForm;
