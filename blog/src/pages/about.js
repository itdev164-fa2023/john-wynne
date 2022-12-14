import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"



const About = ({ data }) => {
    const { name, company} = data.site.setMetadata.contact;
    return (
      <Layout>
        <SEO title="About" />
        <h1>About Us</h1>
        <p>{`${company} was started by ${name} in 2022`}</p>
        <p>{`At ${company} we just make blargs!`}</p>

        <div style={{maxWidth:`300px`, marginBottom:`1.45rem`}}>
        <Image />
        </div>
        <Link to="/">Home</Link>
      </Layout>
    )
}

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
        }
      }
    }
  }
`