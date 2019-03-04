import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../css/footer.css'

const Footer = () => (
  <div className="footer-main">
    <div className="max-wrapper">
        <div className="footer-about flex-column">
            <h2 className="h2">About Us</h2>
            <Link to='/about-us#who-are-we' className="footer-item">Who Are We?</Link>
            <Link to='/about-us#our-mission' className="footer-item">Our Mission</Link>
            <Link to='/about-us#our-vision' className="footer-item">Our Vision</Link>
        </div>
        <div className="footer-pmc flex-column">
            <h2 className="h2">About PMC</h2>
            <Link to='/about-pmc#the-congress' className="footer-item">The Congress</Link>
            <Link to='/about-pmc#the-participants' className="footer-item">The Participants</Link>
            <Link to='/about-pmc#the-venue' className="footer-item">The Venue</Link>
        </div>
        <div className="footer-pmc flex-column">
            <h2 className="h2">Follow Our Social Media</h2>
            <a href='https://www.facebook.com/PhilippineModelCongress/' target="_blank" className="footer-item">Facebook</a>
            <a href='https://twitter.com/PhModelCongress' target="_blank" className="footer-item">Twitter</a>
            <a href='https://www.instagram.com/theofficialpmc/' target="_blank" className="footer-item">Instagram</a>
        </div>
    </div>
  </div>
)

export default Footer
