import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="team">Our Team</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default About;