import NavBar from './NavBar';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
        <nav className="navbar">
          <div className="navbar-left">
            <div className="logo">Logo</div>
          </div>
          <div className="navbar-right">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="./about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Sign In</a></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;