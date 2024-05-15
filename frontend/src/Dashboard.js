// frontend/src/Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/data/');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      {data && (
        <div>
          {/* Your data visualization components go here */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
