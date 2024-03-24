import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
         <div className="logo"> Course AI</div>
         <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Login</a></li>
         </ul>
      </nav>
    </div>
  );
}

export default Navbar;
