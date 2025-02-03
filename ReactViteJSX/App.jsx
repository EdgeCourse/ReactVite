import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Product from './components/Product';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      {selectedProduct ? (
        <Product product={selectedProduct} onBack={handleBack} />
      ) : (
        <ProductList onSelectProduct={handleSelectProduct} />
      )}
    </div>
  );
}

export default App;