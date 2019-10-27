import { graphql } from 'gatsby'

export const contact = graphql`
  fragment contact on ContentfulContact {
    name
    description {
      description
    }
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
