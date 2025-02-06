/*
// App.js
import React from 'react';
import styled from 'styled-components';

// Define styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #2c3e50;
`;

// App component
function App() {
  return (
    <Container>
      <div>
        <Heading>React with Styled Components</Heading>
        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      </div>
    </Container>
  );
}

export default App;
*/

/*
// src/App.jsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme'; // Import the theme

// Define styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div>
          <Heading>Welcome to Vite + React + Styled Components</Heading>
          <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
*/
// src/App.jsx
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, darkTheme } from './theme'; // Assuming darkTheme is defined

// Define styled components (same as before)
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <Container>
        <div>
          <Heading>Welcome to Vite + React + Styled Components</Heading>
          <Button onClick={() => setIsDarkMode(!isDarkMode)}>
            Switch Theme
          </Button>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

