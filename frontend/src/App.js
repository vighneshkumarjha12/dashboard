import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/data/');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Data Visualization Dashboard</h1>
      {data && (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <p>Intensity: {item.Intensity}</p>
              <p>Likelihood: {item.Likelihood}</p>
              <p>Relevance: {item.Relevance}</p>
              <p>Year: {item.Year}</p>
              <p>Country: {item.Country}</p>
              <p>Topics: {item.Topics}</p>
              <p>Region: {item.Region}</p>
              <p>City: {item.City}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
