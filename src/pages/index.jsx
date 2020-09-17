import AboutMe from "../components/AboutMe"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import MyWork from "../components/MyWork"
import React from "react"
import SEO from "../components/seo"
import Section from "../components/Section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <Hero />
    </header>
    <main>
      <Section id="about-me">
        <AboutMe />
      </Section>
      <Section id="my-work">
        <MyWork />
      </Section>
    </main>
  </Layout>
)

export default IndexPage
