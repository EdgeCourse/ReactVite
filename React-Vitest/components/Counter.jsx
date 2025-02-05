/*
// src/components/Counter.jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>The count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
*/

// src/components/Counter.jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => (prevCount === 5 ? 0 : prevCount + 1)); // Reset count at 5
  };

  return (
    <div>
      <p>The count is: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
