import React, { useEffect, useState } from 'react';

function LazyComponent() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div>Loading LazyComponent...</div>;
  }

  return (
    <div>
      <h2>This component was lazily loaded!</h2>
      <p>It is loaded only when you need it using React.lazy() and Suspense.</p>
    </div>
  );
}

export default LazyComponent;
