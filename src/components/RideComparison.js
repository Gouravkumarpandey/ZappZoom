import React from 'react';

const RideComparison = ({ appName, price, eta }) => {
  return (
    <div className="ride-card">
      <h3>{appName}</h3>
      <p>Price: ₹{price}</p>
      <p>ETA: {eta} mins</p>
    </div>
  );
};

export default RideComparison;
