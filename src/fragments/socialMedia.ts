import { graphql } from 'gatsby'

export const socialMedia = graphql`
  fragment socialMedia on ContentfulSocialMedia {
    gitHub
    linkedIn
    instagram
  }
`
