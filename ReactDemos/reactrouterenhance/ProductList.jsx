import React, { useState } from 'react'; // Import useState!
import { Link } from 'react-router-dom';

export const products = [
  { id: 1, category: 'electronics', name: 'Laptop', description: 'High-performance laptop', price: 1200 }, // Price as number
  { id: 2, category: 'electronics', name: 'Smartphone', description: 'Latest smartphone', price: 800 }, // Price as number
  { id: 3, category: 'clothing', name: 'T-Shirt', description: 'Comfortable cotton t-shirt', price: 20 }, // Price as number
  { id: 4, category: 'clothing', name: 'Jeans', description: 'Stylish denim jeans', price: 70 }, // Price as number
  { id: 5, category: 'books', name: 'Novel 1', description: 'Bestselling novel', price: 15 }, // Price as number
  { id: 6, category: 'books', name: 'Novel 2', description: 'Gripping thriller', price: 18 }, // Price as number
];

const ProductList = () => {
  const [currentSort, setCurrentSort] = useState(null);
  const [currentFilter, setCurrentFilter] = useState({});

  const handleSortChange = (field, direction) => {
    setCurrentSort({ field, direction });
  };

  const handleFilterChange = (category) => {
    setCurrentFilter(category === 'all' ? {} : { category });
  };

  const filteredProducts = products.filter(product => {
    if (Object.keys(currentFilter).length === 0) return true;
    return product.category === currentFilter.category;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!currentSort) return 0;

    const aValue = a[currentSort.field];
    const bValue = b[currentSort.field];

    if (currentSort.direction === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return (
    <div>
      <h2>Products</h2>

      {/* Sort Controls */}
      <button onClick={() => handleSortChange('name', 'asc')}>Sort by Name (A-Z)</button>
      <button onClick={() => handleSortChange('name', 'desc')}>Sort by Name (Z-A)</button>
      <button onClick={() => handleSortChange('price', 'asc')}>Sort by Price (Low-High)</button>
      <button onClick={() => handleSortChange('price', 'desc')}>Sort by Price (High-Low)</button>

      {/* Filter Controls */}
      <button onClick={() => handleFilterChange('all')}>All</button>
      <button onClick={() => handleFilterChange('electronics')}>Electronics</button>
      <button onClick={() => handleFilterChange('clothing')}>Clothing</button>
      <button onClick={() => handleFilterChange('books')}>Books</button>

      <ul>
        {sortedProducts.map(product => {
          const filterString = Object.entries(currentFilter)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
          const encodedFilter = encodeURIComponent(filterString);

          const sortString = currentSort
            ? `${currentSort.field}_${currentSort.direction}`
            : '';
          const encodedSort = encodeURIComponent(sortString);

          const queryString = [encodedFilter, encodedSort].filter(Boolean).join('&');
          const url = `/products/${product.category}/${product.id}?${queryString}`;

          return (
            <li key={product.id}>
              <Link to={url}>{product.name}</Link> - {product.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;