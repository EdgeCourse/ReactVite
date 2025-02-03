import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(1); // Initial user ID

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates after unmount

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();

        if (isMounted) { // Check if component is still mounted
          setData(json);
        }

      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup: Set flag to false on unmount
    };
  }, [userId]); // Effect runs whenever userId changes


  const handleUserIdChange = (event) => {
      setUserId(event.target.value)
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
      return <div>No data to display</div>
  }

  return (
    <div>
      <h2>User Details (ID: {userId})</h2>
      <input type="number" value={userId} onChange={handleUserIdChange} min={1} />
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
  
    </div>
  );
}

export default DataFetcher;