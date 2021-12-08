import React, { useState } from 'react'
import '../styles/navbar.css'
import Logo from '../media/logo.png'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Navbar = () => {
  const [mobMenuWidth, setMobMenuWidth] = useState('0px')
  let showMenu = 'hide'
  const toggleMobMenu = () => {
    if (showMenu === 'hide') {
      showMenu = 'show'
      setMobMenuWidth('90%')
    } else if (showMenu === 'show') {
      showMenu = 'hide'
      setMobMenuWidth('0px')
    }
  }

  const hideMobMenu = () => {
    setMobMenuWidth('0%')
    showMenu = 'hide'
  }

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" className="logo-home-link">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-menu">
        <button className="mob-menu-btn" onClick={toggleMobMenu}>
          <MenuIcon className="mob-menu-icon" />
        </button>
        <div className="mob-nav" style={{ width: mobMenuWidth }}>
          <div className="mob-menu-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="mob-menu-collection">
            <ul>
              <li>
                <Link to="/" className="mob-menu-item" onClick={hideMobMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="mob-menu-item"
                  onClick={hideMobMenu}
                >
                  Menu2
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="mob-menu-item"
                  onClick={hideMobMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="mob-menu-item"
                  onClick={hideMobMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mob-menu-social">
            <FacebookIcon className="social-icon-lg" />
            <TwitterIcon className="social-icon-lg" />
            <InstagramIcon className="social-icon-lg" />
            <LinkedInIcon className="social-icon-lg" />
          </div>
          <div className="mob-copyright">
            <p>&copy; {new Date().getFullYear()} Food Lover Pvt Ltd</p>
          </div>
        </div>
        <ul className="menu-collection-lg">
          <li>
            <Link to="/" className="menu-link-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="menu-link-lg">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu-link-lg">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu-link-lg">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
