import React from 'react'
import './help.css'
import Helper from './help-center.jpg'

const Help = () => {
  return (
    <section id="help">
      <div className="help-ctn">
        <h1>HELP CENTER</h1>
        <span className="helper">
          <img src={Helper} alt="" />
        </span>
      </div>
      <div className='help-cont'>
        <p>
          We are available 24/7 to take your complaints and help you fix them. Send a message below.
        </p>
        <form action="SUBMIT">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter your name here" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email address" />
          <label htmlFor="phone">Phone Number</label>
          <input type="text" placeholder="Enter your phone number" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10">
            Type your message here
                  </textarea>
                  <button>Send</button>
        </form>
          </div>
          <div className="faq">
              <h2>FAQs</h2>

          </div>
    </section>
  );
}

export default Help