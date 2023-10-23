import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LikelihoodOfInfection from './likelihoodOfInfection';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="fullscreen-content">
      <header className="App-header">
        <h1 className="text-center">Probability of Infection</h1>
        <LikelihoodOfInfection />
      </header>
    </div>
  </div>
  );
}

export default App;