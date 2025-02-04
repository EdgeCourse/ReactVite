import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';
import Team from './Team'; // Import Team component
import Profile from './Profile'; // Import Profile component


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
          <Route path="profile/:userId" element={<Profile />} /> {/* Profile route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;