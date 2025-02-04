import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile/123');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={goToProfile}>Go to Profile</button>
    </div>
  );
};

export default Home;