import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const ThemeContext = createContext('light'); // Default theme is 'light'

// 2. Create a ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a custom hook to use the theme (optional but recommended)
const useTheme = () => useContext(ThemeContext);

// 4. Create components that use the theme
function ThemedComponent() {
  const { theme } = useTheme(); // Use the custom hook

  const styles = {
    backgroundColor: theme === 'dark' ? '#333' : '#eee',
    color: theme === 'dark' ? '#eee' : '#333',
    padding: '20px',
    borderRadius: '8px',
  };

  return (
    <div style={styles}>
      <h2>Themed Component</h2>
      <p>Current theme: {theme}</p>
    </div>
  );
}

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme(); // Use the custom hook

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}


function AnotherThemedComponent() {
    const {theme} = useTheme();

    const styles = {
        color: theme === 'dark' ? 'lightcoral' : 'forestgreen'
    }

    return (
        <p style={styles}>This text is also themed!</p>
    )
}

// 5. Wrap your app with the ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>React Context Example</h1>
        <ThemedComponent />
        <ThemeSwitcher />
        <AnotherThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;