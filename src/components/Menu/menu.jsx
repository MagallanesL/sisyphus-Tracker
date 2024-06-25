// src/components/Menu.js
import React, { useState } from 'react';
import './menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu-container ${isOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className="menu">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/cronometro">Cronómetro</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
