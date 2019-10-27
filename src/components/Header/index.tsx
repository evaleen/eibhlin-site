import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { GitHub, Instagram, LinkedIn } from 'src/icons'
import HeaderWrapper, { Link } from './style'

interface SocialMedia {
  gitHub: string
  linkedIn: string
  instagram: string
}

const icons = {
  gitHub: GitHub,
  instagram: Instagram,
  linkedIn: LinkedIn,
}

const Header: React.SFC = () => (
  <StaticQuery
    query={query}
    render={({ socials }: { socials: SocialMedia }) => (
      <HeaderWrapper>
        {Object.keys(socials).map((media: string, index: number) => {
          const Icon: React.SFC = icons[media]
          return (
            <Link key={index} href={socials[media]} target="_blank">
              <Icon />
            </Link>
          )
        })}
      </HeaderWrapper>
    )}
  />
)

const query = graphql`
  query {
    socials: contentfulSocialMedia(name: { eq: "Social Media" }) {
      ...socialMedia
    }
  }
`

export default Header
