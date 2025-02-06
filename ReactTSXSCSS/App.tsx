// src/App.tsx

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Product from './components/Product';
import ProductForm from './components/ProductForm';
import './App.scss';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  stock: number;
}

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
    setIsAdding(false);
  };

  const handleAddProduct = (product: Product) => {
    setIsAdding(false);
    setSelectedProduct(null); // Clear selected product after adding
  };

  const handleStartAdding = () => {
    setIsAdding(true);
    setSelectedProduct(null); // Clear selected product when starting to add
  };

  return (
    <div className="App">
      {isAdding ? (
        <ProductForm onAddProduct={handleAddProduct} onCancel={handleBack} />
      ) : selectedProduct ? (
        <Product product={selectedProduct} onBack={handleBack} />
      ) : (
        <>
          <ProductList onSelectProduct={handleSelectProduct} />
          <button onClick={handleStartAdding}>Add Product</button>
        </>
      )}
    </div>
  );
};

export default App;





