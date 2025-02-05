
import { useState, useEffect } from 'react';

const useSearch = (data, query) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!query) {
      setFilteredData(data);
    } else {
      const lowercasedQuery = query.toLowerCase();
      const filtered = data.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(lowercasedQuery)
        )
      );
      setFilteredData(filtered);
    }
  }, [data, query]);

  return filteredData;
};

export default useSearch;
    