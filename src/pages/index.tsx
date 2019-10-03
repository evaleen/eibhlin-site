import React from 'react'
import Intro from '../components/Intro'
import Extras from '../components/Extras'
import WorkExperience from '../components/WorkExperience'
import Contact from '../components/Contact'
import Layout from '../layouts'

const IndexPage: React.SFC = () => (
  <Layout>
    <Intro />
    <Extras />
    <WorkExperience />
    <Contact />
  </Layout>
)

export default IndexPage
