import React from 'react';
import Navbar from './components/Navbar';
import RideComparison from './components/RideComparison';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RideComparison />
      <Footer />
    </div>
  );
}

export default App;
