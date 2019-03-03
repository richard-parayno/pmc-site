import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../css/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="layout-bg">
      <div className="landing maxwidth">
        <div className="header-main">
          <h1 className="h1">Join the 8th Philippine Model Congress.</h1>
          <p>Redefining the Role of the Filipino Youth this 2019.</p>
        </div>
        <div className="button-group">
          <a href="http://bit.ly/PMC2019-Delegates" target="_blank"><button className="button">Apply as a Delegate</button></a>
          <a href="http://bit.ly/PMC2019-Moderators" target="_blank"><button className="button">Apply as a Moderator</button></a>
        </div>
      </div>
    </div>
    <div className="landing-after maxwidth">
      <div className="about-grid">
        <div className="illu">
          <img viewBox="0 0 938 604" src={require('../images/candidate.svg')}></img>
        </div>
        <div className="content">
          <h2 className="item-support">About PMC</h2>
          <h1 className="item-section">What is the Philippine Model Congress?</h1>
          <p className="item-text">The Philippine Model Congress is a National Youth Congress that brings together the best Youth Leaders from diverse backgrounds which aims to give the youth an opportunity to band together and unitedly propose a stand to congress on what matters to them, and in doing so, be heard by our country’s leaders, increase awareness on national issues, and create a community of young people commited to nation building. </p>
          <Link to='/about-pmc'><button className="button no-width">Learn More About PMC</button></Link>
        </div>
      </div>
    </div>
    <div className="layout-bg">
      <div className="landing-after maxwidth">
        <div className="about-grid reverse">
          <div className="illu">
            <img viewBox="0 0 938 604" src={require('../images/community.svg')}></img>
          </div>
          <div className="content">
            <h2 className="item-support">About Us</h2>
            <h1 className="item-section">Who are we?</h1>
            <p className="item-text">The Philippine Model Congress is organized by a group of purpose-driven student leaders from different universities who envision a progressive Philippines and aim to make a difference by maximizing the potential of the Filipino Youth through empowerment and civic movement.</p>
            <Link to='/about-us'><button className="button no-width">Learn More About the Organizers</button></Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
