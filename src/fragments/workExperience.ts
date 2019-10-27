import { graphql } from 'gatsby'

export const workExperience = graphql`
  fragment workExperience on ContentfulWorkExperience {
    name
    image {
      fixed(height: 240) {
        ...GatsbyContentfulFixed
      }
    }
    description {
      description
    }
  }
`
