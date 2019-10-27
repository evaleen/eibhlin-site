import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Intro, Extras, WorkExperience, Contact } from '../components'
import Layout from '../layouts'

const IndexPage: React.SFC = () => {
  const { intro, extras, experience, contact } = useStaticQuery(query)
  return (
    <Layout>
      <Intro {...intro} />
      <Extras {...extras} />
      <WorkExperience {...experience} />
      <Contact {...contact} />
    </Layout>
  )
}

const query = graphql`
  query {
    intro: contentfulIntro(name: { eq: "Intro Block" }) {
      ...intro
    }
    extras: contentfulExtras(name: { eq: "Extras" }) {
      ...extras
    }
    experience: contentfulExperience(name: { eq: "Experience" }) {
      ...experience
    }
    contact: contentfulContact(name: { eq: "Contact" }) {
      ...contact
    }
  }
`

export default IndexPage
