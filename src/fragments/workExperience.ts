import { graphql } from 'gatsby'

export const workExperience = graphql`
  fragment workExperience on ContentfulWorkExperience {
    name
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
