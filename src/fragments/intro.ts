import { graphql } from 'gatsby'

export const intro = graphql`
  fragment intro on ContentfulIntro {
    name
    image {
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    copy {
      json
    }
  }
`
