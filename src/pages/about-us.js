import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../css/aboutus.css'

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" keywords={[`gatsby`, `application`, `react`]} />
    <div className="about-us">
        <div className="layout-bg">
          <div className="landing-after maxwidth">
            <div className="about-item">
                <h2 className="item-support">About Us</h2>
                <h1 className="item-section">Who are we?</h1>
                <p className="item-text">The Philippine Model Congress is organized by a group of purpose-driven student leaders from different universities who envision a progressive Philippines and aim to make a difference by maximizing the potential of the Filipino Youth through empowerment and civic movement.</p>
            </div>
          </div>
        </div>
        <div className="landing-after maxwidth">
          <div className="about-item">
              <h2 className="item-support">About Us</h2>
              <h1 className="item-section">Our Mission</h1>
              <p className="item-text">To strengthen the voice of the Filipino Youth, to instill Political Awareness and Civic Movement among Filipino Youth and to build a community of Filipino Youth who are positive invested in the Country’s future.</p>
          </div>
        </div>
        <div className="landing-after maxwidth">
          <div className="about-item">
              <h2 className="item-support">About Us</h2>
              <h1 className="item-section">Our Vision</h1>
              <p className="item-text">To be the premier legislative simulation of the Philippines where the Filipino Youth are inspired to take an active role in nation building and shaping the national agenda.</p>
          </div>
        </div>
    </div>
  </Layout>
)

export default AboutUs
