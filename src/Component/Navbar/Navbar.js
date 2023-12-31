import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // You can replace this with your routing library
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems,setCartItems]=useState([])

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(()=>{
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    setCartItems(savedCartItems === null ? []: savedCartItems)

  },[cartItems])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Your Logo
        </Link>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleNavbar}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleNavbar}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link" onClick={toggleNavbar}>
              <span>{cartItems?.length}</span>
              Carts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
