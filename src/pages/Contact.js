import React, { useEffect } from 'react'
import contact from '../media/contact.jpg'
import '../styles/contact.css'

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className="contact-container">
      <div className="contact-image" style={{ background: `url(${contact})` }}>
        <h2>Contact Us</h2>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name..."
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="50"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          <div className="contact-btn-container">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
