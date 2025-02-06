// src/components/ProductList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  stock: number;
}

interface ProductListProps {
  onSelectProduct: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <span>{product.name}</span>
              <button onClick={() => onSelectProduct(product)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
