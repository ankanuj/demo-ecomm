import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.style.scss';

const Header = () => (
  
        <Navbar className = "header-list">
    
            <Link className="header-item" to = '/' > Home </Link>
            <Link className="header-item" to = '/cart' > Cart </Link>
            
        </Navbar>

);

export default Header;