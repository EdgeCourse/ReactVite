import React, { useRef, useState } from 'react'; // Import useRef and useState


function UncontrolledForm() {
  const inputRef = useRef();
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const query = inputRef.current.value;

    // Simulating an API fetch
    const fakeResults = ["Apple", "Banana", "Cherry"].filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setResults(fakeResults);
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Search..." />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}




export default UncontrolledForm;