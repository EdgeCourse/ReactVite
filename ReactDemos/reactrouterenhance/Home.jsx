import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProductList from './ProductList'; // Import ProductList

const Home = () => {
  const navigate = useNavigate();

  const goToProfile = () => navigate('/profile/123');

  return (
    <div>
      <h2>Home Page</h2>
     
  

     

      <ProductList /> {/* Add the ProductList component */}
    </div>
  );
};

export default Home;