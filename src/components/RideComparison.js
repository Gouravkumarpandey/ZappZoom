import React, { useState, useEffect } from 'react';
import mockData from '../mockData';

function RideComparison() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    // Simulate fetching ride data
    setRides(mockData);
  }, []);

  return (
    <main>
      <h2>Compare Ride Options</h2>
      <div>
        {rides.map((ride) => (
          <div key={ride.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h3>{ride.appName}</h3>
            <p>Cost: ₹{ride.cost}</p>
            <p>Car Type: {ride.carType}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default RideComparison;
