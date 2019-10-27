import { graphql } from 'gatsby'

export const experience = graphql`
  fragment experience on ContentfulExperience {
    name
    description {
      description
    }
    content {
      ...workExperience
    }
  }
`
