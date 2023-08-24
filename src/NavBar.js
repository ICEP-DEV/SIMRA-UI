import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React from 'react';
import './NavBar.css'; // Import the CSS file for styling
import Home from './components/Home';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">Simra</a>
      </div>
      <div className="navbar-right">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/signin">Sign-in</a>
      </div>
    </nav>
  );
};

export default NavBar;
