import React from 'react'
import { Link } from "react-router-dom";
import './account.css'


const Signin = () => {
  return (
    <section id="signin">
      <h1>Welcome!</h1>
      <p>Already a customer? sign in below</p>
      <form action="" className="signup-form">
      
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter your email address" />


        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" />
        
        <button className="send-btn signin-btn">Sign in</button>
      </form>
      <p className="signin-instead">
        You don't have an existing account? 
        <i>
          <Link to="/signup"> Signup here</Link>
        </i>
      </p>
    </section>
  );
}

export default Signin