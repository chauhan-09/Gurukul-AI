import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
      <h2>Register</h2>
      <div className="A1">
      <div className="form-group fullname">
        <label for="fullname">Full Name</label>
        <input type="text" id="fullname" placeholder="Enter your full name"/>
      </div>
      <div className="form-group email">
        <label for="email">Email Address</label>
        <input type="text" id="email" placeholder="Enter your email address"/>
      </div>
      <div className="form-group password">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password"/>
        <i id="pass-toggle-btn" className="fa-solid fa-eye"></i>
      </div>
      <div className="form-group date">
        <label for="date">Birth Date</label>
        <input type="date" id="date" placeholder="Select your date"/>
      </div>
      <div className="form-group gender">
        <label for="gender">Gender</label>
        <select id="gender">
          <option value="" selected disabled>Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group submit-btn">
        <input type="submit" value="Submit"/>
      </div>
    </div>
    </div>
  )
}

export default Login
