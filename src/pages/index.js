import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import MainContent from "../components/MainContent/MainContent"

/*

header - Navbar
left - Social Links
right - Email
content
  main
    section1 - Intro
    section2 - About
    section3 - Projects
    section4 - Achievements
    section4 - Get in touch
  footer

*/

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* add all components here and they will be children of main */}

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    <MainContent />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
