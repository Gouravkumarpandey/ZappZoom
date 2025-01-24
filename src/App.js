import React from 'react';
import RideComparison from './components/RideComparison';
import { fetchRideData } from './utils/api';

function App() {
  const rides = fetchRideData();

  return (
    <div className="App">
      <header className="App-header">
        <h1>ZapZoom</h1>
        <p>Compare rides from multiple apps!</p>
      </header>
      <main>
        {rides.map((ride, index) => (
          <RideComparison
            key={index}
            appName={ride.appName}
            price={ride.price}
            eta={ride.eta}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
