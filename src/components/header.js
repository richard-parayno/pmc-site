import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../css/header.css'

const Header = ({ siteTitle }) => (
  <header className="header-container">
    <div>
      <div className="header-links">
        <Link className="header-item" to='/about-us'>About Us</Link>
        <Link className="header-item" to='/'>About PMC</Link>
        <Link className="header-item" to='/'>The Organizers</Link>
        <Link className="header-item" to='/'>Contact Us</Link>
        <Link className="header-item" to='/'>Our Sponsors</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
