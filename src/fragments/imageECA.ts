import { graphql } from 'gatsby'

export const imageECA = graphql`
  fragment imageECA on ContentfulImageEca {
    image {
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    description {
      description
    }
  }
`
