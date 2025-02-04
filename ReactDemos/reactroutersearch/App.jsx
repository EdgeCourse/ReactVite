import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate, useSearchParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Link to="/search?query=example">Search for "example"</Link><br/>
      <Link to="/search?query=another+search&filter=new">Search for "another search" with filter</Link>
    </div>
  );
}

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const filter = searchParams.get('filter');
  const navigate = useNavigate();

  const handleSearch = (e) => {
      e.preventDefault();
      const newQuery =  e.target.elements.query.value;
      const newFilter = e.target.elements.filter.value;

      const params = new URLSearchParams();
      if(newQuery) params.append('query', newQuery);
      if(newFilter) params.append('filter', newFilter);

      navigate(`/search?${params.toString()}`);
  };

  return (
    <div>
      <h1>Search Results</h1>
      {query && <p>Searching for: {query}</p>}
      {filter && <p>Filter: {filter}</p>}

      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="Enter search query" defaultValue={query || ""}/>
        <input type="text" name="filter" placeholder="Enter filter" defaultValue={filter || ""}/>
        <button type="submit">Search</button>
      </form>
       <Link to="/">Back to Home</Link>
    </div>
  );
}


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link> {/* Basic link to search, no query yet */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          {/* If you want to handle more complex paths or nested routes */}
          {/* <Route path="/search/:id" element={<SearchDetails />} />  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;