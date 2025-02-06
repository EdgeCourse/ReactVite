import React, { Suspense, useState } from 'react';

// Lazy load the component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <h1>React Suspense and Lazy Load with Vite</h1>
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Lazy Loaded Component
      </button>

      {/* Suspense is used to show a fallback while loading the lazy component */}
      <Suspense fallback={<div>Loading...</div>}>
        {showComponent && <LazyComponent />}
      </Suspense>
    </div>
  );
}

export default App;
