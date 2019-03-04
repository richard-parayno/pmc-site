import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../css/howtoregister.css'

const HowToRegister = () => (
  <Layout>
    <SEO title="How to Register" keywords={[`gatsby`, `application`, `react`]} />
    <div className="about-us">
        <div className="layout-bg">
            <div className="landing-after maxwidth">
            <div className="about-item">
                <h2 className="item-support">How to Register - Application Process</h2>
                <h1 className="item-section">How do I apply as a Delegate/Moderator?</h1>
                <p className="item-text">Fill up the application form that can be found in the <Link to="/">Home Page</Link>. Results will be announced via e-mail. Once you're accepted, you need to confirm your slot as a Delegate or Moderator. Once confirmed, prepare for your assigned committee.</p>
            </div>
            </div>
        </div>
        <div className="landing-after maxwidth">
          <div className="about-item">
              <h2 className="item-support">How to Register - Application Process</h2>
              <h1 className="item-section">How do I confirm my slot as a delegate?</h1>
              <p className="item-text">Follow the instructions and deadlines stated in your acceptance letter regarding the confirmation process. This should be sent in the email address you used in your application.</p>
          </div>
        </div>
        {/* <div className="landing-after maxwidth">
          <div className="about-item">
              <h2 className="item-support">How to Register - Cost Information</h2>
              <h1 className="item-section">What is inclusive in the entrance/delegate fee?</h1>
              <p className="item-text">A minimal fee of <strong>PHP750.00</strong> will be charged that covers food and beverages, delegate kits and IDs, exclusive access to the Philippine Senate Hall and the opportunity to network with, and learn from, other youth leaders and distinguished speakers.</p>
          </div>
        </div>
        <div className="landing-after maxwidth">
          <div className="about-item">
              <h2 className="item-support">How to Register - Cost Information</h2>
              <h1 className="item-section">Can I have an official letter containing the breakdown of the delegate fee?</h1>
              <p className="item-text">Yes! Simply inform your ambassador of your request for an “Entrance Fee Breakdown To (me/school),” indicating your full name as recognized by the school, the name of your institution, the address of your institution, the name of the addressee, the position of the addressee in your institution, and the email address of the addressee..</p>
          </div>
        </div> */}
    </div>
  </Layout>
)

export default HowToRegister
