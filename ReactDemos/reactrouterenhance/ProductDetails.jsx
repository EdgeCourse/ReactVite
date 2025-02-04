import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {products} from './ProductList';


const ProductDetails = () => {
    const { category, productId } = useParams();
    const [searchParams] = useSearchParams();

    const sortParam = searchParams.get('sort');
    const filterParam = searchParams.get('filter');

    // Parsing sort
    let sortField = 'name';
    let sortDirection = 'asc';

    if (sortParam) {
        const [field, direction] = sortParam.split('_');
        sortField = field || sortField;
        sortDirection = direction || sortDirection;
    }

    // Parsing filter   
    let categoryFilter = null;

    if (filterParam) {
        const [filterKey, filterValue] = filterParam.split('=');
        if (filterKey === 'category') {
            categoryFilter = filterValue;
        }
    }

    // Filtering
    const filteredProducts = products.filter(product => {
        if (!categoryFilter) return true;
        return product.category === categoryFilter;
    });

    // Sorting (Important: Create a copy before sorting!)
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (sortDirection === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });


    // Find the single product to display based on productId
    const product = sortedProducts.find(p => p.id === parseInt(productId, 10)); // Parse productId as an integer

    if (!product) {
      return <div>Product not found</div>; // Handle cases where the product isn't found.
    }

    return (
        <div>
            <h2>Product Details</h2>
            <p>Category: {product.category}</p>
            <p>Product ID: {product.id}</p> {/* Use product.id, not productId */}
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p> {/* Display the price */}
            {/*<p>Sort: {sortParam || 'Not specified'}</p>*/}
            {/*<p>Filter: {filterParam || 'Not specified'}</p>*/}
        </div>
    );
};

export default ProductDetails;