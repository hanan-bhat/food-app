import React, { useEffect } from 'react'
import '../styles/home.css'
// import banner from '../media/banner.png'
import { Link } from 'react-router-dom'
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.3)), url(https://as2.ftcdn.net/v2/jpg/02/42/39/25/1000_F_242392532_PcdSE6CqcAqqLuvASw2WajKL3u5gNKXd.jpg)`,
      }}
    >
      <div className="hero-content">
        <h2>Quality food in town</h2>
        <p>Enjoy the hot & sizzling food at your doorstep</p>
        <Link to="/menu" className="hero-order-btn">
          Order Now
        </Link>
      </div>
    </div>
  )
}

export default Home
