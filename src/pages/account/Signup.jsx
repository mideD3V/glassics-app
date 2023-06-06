import React from 'react'
import {Link} from 'react-router-dom'
import './account.css'
const Signup = () => {
  return (
    <section id="signup">
      <h1>Welcome!</h1>
      <p>Kindly fill the form below to create a Glassics account</p>
      <form action="" className="signup-form">
        <label htmlFor="name">First Name</label>
        <input type="text" placeholder="Enter your first name here" />

        <label htmlFor="name">Last Name</label>
        <input type="text" placeholder="Enter your last name here" />

        <label htmlFor="phone">Phone Number</label>
        <input type="text" placeholder="Enter your phone number" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter your email address" />

        <label htmlFor="email">Confirm Email</label>
        <input type="email" placeholder="Enter your email address" />

        <label htmlFor="password">Create a password</label>
        <input type="password" placeholder="Password" />
        
        <label htmlFor="password">Confirm password</label>
        <input type="text" placeholder="Password" />

        <div className="signup-agreement">
          <input type="checkbox" name="agreement" id="" />
          <p>
            By creating an account, you agree to Glassics's{" "}
            <Link to="/tos">Terms of Service</Link> and{" "}
            <Link to="privacy">Privacy Policy</Link>.
          </p>
        </div>
        <button className="send-btn">Sign up</button>
      </form>
      <p className="signin-instead">
        Already have an account with us?{" "}
        <i>
          <Link to='/signin'> Signin here</Link>
        </i>
      </p>
    </section>
  );
}

export default Signup