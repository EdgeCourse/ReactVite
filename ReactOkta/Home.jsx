import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Okta App</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/protected">Go to Protected Page</Link>
    </div>
  );
};

export default Home;
