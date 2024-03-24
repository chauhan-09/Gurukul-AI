import React from 'react'
import './Navbar.css'
import Login from './Login'

function Navbar() {
  return (
    <div>
      <nav>
         <div className="logo"> Course AI</div>

         <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="/Login">Login</a></li>
         </ul>
      </nav>
    </div>
  )
}

export default Navbar
