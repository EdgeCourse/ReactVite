import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, Suspense, lazy } from 'react';

// Lazy load components
const ProductList = lazy(() => import('./components/ProductList')); 
const ProductForm = lazy(() => import('./components/ProductForm')); 
const Product = lazy(() => import('./components/Product')); 

function App() {  // Function declaration with curly braces
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
    setIsAdding(false);
  };

  const handleAddProduct = (product) => {
    setIsAdding(false);
    setSelectedProduct(null); // Clear selected product
  };

  const handleStartAdding = () => {
    setIsAdding(true);
  };

  return ( // Correct placement of return, no extra parentheses
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  ); // Closing curly brace for the App function
}

export default App;

/*
//the following is missing a close curly brace for App
import React, { useState, Suspense, lazy } from 'react';
import './App.css';
// Lazy load components
const ProductList = lazy(() => import('./components/ ProductList'));
const ProductForm = lazy(() => import('./components/ ProductForm'));
const Product = lazy(() => import('./components/ Product'));
function App() {
const [selectedProduct, setSelectedProduct] =
useState(null);
const [isAdding, setIsAdding] = useState(false);
const handleSelectProduct = (product) => { setSelectedProduct(product);
};
const handleBack = () =>
{ setSelectedProduct(null); setIsAdding(false);
};
const handleAddProduct = (product) => { setIsAdding(false);
setSelectedProduct(null); // Clear selected product };
96
const handleStartAdding = () => { setIsAdding(true);
};
return (
<div className="App">
<Suspense fallback={<div>Loading...</div>}> {isAdding ? (
<ProductForm onAddProduct={handleAddProduct} onCancel={handleBack} />
) : selectedProduct ? (
<Product product={selectedProduct}
onBack={handleBack} /> ):(
<> <ProductList
onSelectProduct={handleSelectProduct} />
<button onClick={handleStartAdding}>Add
Product</button>
</> )}
      </Suspense>
    </div>
); }
export default App;
*/