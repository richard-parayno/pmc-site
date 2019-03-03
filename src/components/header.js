import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../css/header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-links">
      <Link className="header-item pull-left" activeClassName="active" >Logo</Link>
      <Link className="header-item" activeClassName="active" to='/'>Home</Link>
      <Link className="header-item" activeClassName="active" to='/how-to-register'>How to Register</Link>
      <Link className="header-item" activeClassName="active" to='/about-us'>About Us</Link>
      <Link className="header-item" activeClassName="active" to='/about-pmc'>About PMC</Link>
      {/* <Link className="header-item" activeClassName="active" to='/'>The Organizers</Link>
      <Link className="header-item" activeClassName="active" to='/'>Contact Us</Link>
    <Link className="header-item" activeClassName="active" to='/'>Our Sponsors</Link> */}
    </div>
    <div className="header-links-mobile">
      <p>Logo</p>
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
