import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../css/aboutus.css'

const AboutPMC = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="about-us">
        <div className="about-item">
            <h2 className="item-support">About PMC</h2>
            <h1 className="item-section">What is the Philippine Model Congress?</h1>
            <p className="item-text">The Philippine Model Congress is a National Youth Congress that brings together the best Youth Leaders from diverse backgrounds which aims to give the youth an opportunity to band together and unitedly propose a stand to congress on what matters to them, and in doing so, be heard by our country’s leaders, increase awareness on national issues, and create a community of young people commited to nation building. </p>
        </div>
        <div className="about-item">
            <h2 className="item-support">About PMC</h2>
            <h1 className="item-section">Who are the participants?</h1>
            <p className="item-text">The Philippine Model Congress will be attended by outstanding Filipino High School, College Students and Professionals from different parts of the country and they will each represent their respective regions.</p>
        </div>
        <div className="about-item">
            <h2 className="item-support">About PMC</h2>
            <h1 className="item-section">Where will it be held?</h1>
            <p className="item-text">The Philippine Model Congress will be held in the Committee Halls of the <strong>Senate of the Philippines</strong> located in the Second Floor, Right Wing of the GSIS Building in Pasay City. The venue is where the Senators conduct official committee meetings  and are rarely used for public events.</p>
        </div>
    </div>
  </Layout>
)

export default AboutPMC
