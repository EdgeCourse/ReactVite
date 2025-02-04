import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Team from './Team';
import Profile from './Profile';
import ProductDetails from './ProductDetails'; // Import ProductDetails
import Layout from './Layout';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="profile/:userId" element={<Profile />} />
          <Route path="/products/books/:id" element={<ProductDetails />} /> {/* Dynamic ID */}
          <Route path="products/:category/:productId" element={<ProductDetails />} /> {/* Route with multiple params */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;