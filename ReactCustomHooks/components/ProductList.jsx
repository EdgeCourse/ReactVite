import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import useSort from '../hooks/useSort';
import useSearch from '../hooks/useSearch';

function ProductList({ onSelectProduct }) {
  const { data: products, loading, error } = useFetch('http://localhost:5000/products');
  const { sortedData, requestSort, sortConfig } = useSort(products);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = useSearch(sortedData, searchQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const getClassNamesFor = (name) => {
    if (!sortConfig) return;
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="button"
        onClick={() => requestSort('name')}
        className={getClassNamesFor('name')}
      >
        Sort by Name
      </button>
      <ul>
        {filteredData.map((product) => (
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
