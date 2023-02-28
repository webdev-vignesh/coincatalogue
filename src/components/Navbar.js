import React from 'react';
import {FaCoins} from 'react-icons/fa';
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <Link to="/" className="navbar">
          <FaCoins className="icon" />
          <h1>Coin <span className="site-name">Catalogue</span></h1>
      </Link>
  )
}

export default Navbar