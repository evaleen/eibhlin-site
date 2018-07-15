import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const socailMedia = [
  {
    link: 'https://github.com/evaleen',
    img: 'github',
  },
  {
    link: 'https://www.linkedin.com/in/eibhlin-mcgeady-90735a95/',
    img: 'linkedin',
  },
  {
    link: 'https://www.instagram.com/spicybeanbrgr/',
    img: 'instagram',
  },
]

const Layout = ({ children }) => (
  <div>
    <Helmet title="Eibhlín McGeady">
      <link
        href="https://fonts.googleapis.com/css?family=Habibi"
        rel="stylesheet"
      />
    </Helmet>
    <Header socialMedia={socailMedia} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
