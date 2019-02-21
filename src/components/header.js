import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../css/header.css'

const Header = ({ siteTitle }) => (
  <header className="header-container">
    <div>
      <div className="header-links">
        <a className="header-item">About Us</a>
        <a className="header-item">About PMC</a>
        <a className="header-item">The Organizers</a>
        <a className="header-item">Contact Us</a>
        <a className="header-item">Our Sponsors</a>
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
