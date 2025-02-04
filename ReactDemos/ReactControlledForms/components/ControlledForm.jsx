
import React, { useState } from 'react'; // Import useState hook


function ControlledForm() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    
    // Simulating an API fetch
    const fakeResults = ["Apple", "Banana", "Cherry"].filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setResults(fakeResults);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}



export default ControlledForm;