import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../css/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="landing">
      <div className="header-main">
        <h1 className="h1">Redefine the role of the Filipino Youth.</h1>
      </div>
      <div className="button-group">
        <a href="http://bit.ly/PMC2019-Delegates"><button className="button">Apply as a Delegate</button></a>
        <a href="http://bit.ly/PMC2019-Moderators"><button className="button">Apply as a Moderator</button></a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
