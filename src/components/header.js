import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { slide as Menu } from 'react-burger-menu'


import '../css/header.css'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '15px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#F8F8F8',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    textAlign: 'center'
  },
  bmItem: {
    display: 'block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-links">
      <Link className="header-item pull-left" to="/">Logo</Link>
      <Link className="header-item" activeClassName="active" to='/'>Home</Link>
      <Link className="header-item" activeClassName="active" to='/how-to-register'>How to Register</Link>
      <Link className="header-item" activeClassName="active" to='/about-us'>About Us</Link>
      <Link className="header-item" activeClassName="active" to='/about-pmc'>About PMC</Link>
      {/* <Link className="header-item" activeClassName="active" to='/'>The Organizers</Link>
      <Link className="header-item" activeClassName="active" to='/'>Contact Us</Link>
    <Link className="header-item" activeClassName="active" to='/'>Our Sponsors</Link> */}
    </div>
    <Menu styles={styles} width={'100%'}>
      <Link className="header-item" activeClassName="active" to='/'>Home</Link>
      <Link className="header-item" activeClassName="active" to='/how-to-register'>How to Register</Link>
      <Link className="header-item" activeClassName="active" to='/about-us'>About Us</Link>
      <Link className="header-item" activeClassName="active" to='/about-pmc'>About PMC</Link>
    </Menu>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
