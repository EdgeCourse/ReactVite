import React, { useState, useMemo, useCallback, useRef } from 'react';

/* 
useMemo: We'll use useMemo to calculate the total price of the products in the cart, and we want to prevent unnecessary recalculations when the list of products hasn't changed.

The totalPrice of the cart is memoized, meaning that it will only recompute when the cart array changes. If the cart doesn't change, the price doesn't get recalculated on every render, improving performance.


useCallback: We'll use useCallback to handle actions like adding a product to the cart, and we want to avoid recreating the function on every render.

addToCart and removeFromCart are memoized using useCallback. This prevents the functions from being recreated on every render, which can improve performance, especially if these functions are passed down as props to child components.


useRef: We'll use useRef to focus on the search input when the page loads, making it easier for users to start searching immediately.

searchInputRef is used to store a reference to the search input field. In the useEffect hook, we focus on the input field when the component mounts, so users can start typing immediately after the page loads.

With vs without these hooks: 

Performance:

With useMemo: Prevents unnecessary recalculations of values (like totalPrice) and ensures that expensive operations are only done when necessary (like when cart changes).
Without useMemo: Everything recalculates on each render, which can negatively impact performance, especially in large or complex components.
Efficiency of Functions:

With useCallback: Ensures that functions (like addToCart and removeFromCart) don’t get recreated on every render, which can prevent unnecessary re-renders of child components.
Without useCallback: Functions are recreated on every render, which can cause unnecessary re-renders of child components, even if those functions haven't changed.
Direct DOM Manipulation:

With useRef: Allows direct manipulation of the DOM (like focusing the search input) without causing re-renders.
Without useRef: You would need to manually handle DOM elements, potentially causing re-renders or requiring more complex workarounds.

*/

const ProductList = () => {
  // List of products available in the store
  const availableProducts = [
    { id: 1, name: 'JS Book', price: 30 },
    { id: 2, name: 'ES6 Book', price: 20 },
    { id: 3, name: 'React Book', price: 50 },
    { id: 4, name: 'Advanced Hooks', price: 40 },
  ];

  // Cart state
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // useRef for the search input field
  const searchInputRef = useRef(null);

  // useMemo to calculate the total price of the cart items
  const totalPrice = useMemo(() => {
    return cart.reduce((total, product) => total + product.price, 0);
  }, [cart]); // Only recompute when cart changes

  // useCallback for adding a product to the cart (memoizing the function)
  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []); // This function doesn't depend on any props or state, so it will be the same across renders

  // useCallback for removing a product from the cart
  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  }, []); // This function doesn't depend on any props or state, so it will be the same across renders

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Focus the search input field on mount
  React.useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  // Filter products based on search query
  const filteredProducts = availableProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Product List</h1>
      
      {/* Search Bar */}
      <input
        ref={searchInputRef}
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for products"
      />
      
      {/* List of filtered products */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      
      {/* Cart */}
      <h2>Your Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Total Price */}
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default ProductList;
