import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
export function Header() {
  return (
    <header style={{ backgroundColor: '#B3E5FC', color: '#000', width: '100%', padding: '10px' }}>
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  </header>
);
};

