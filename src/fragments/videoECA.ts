import { graphql } from 'gatsby'

export const videoECA = graphql`
  fragment videoECA on ContentfulVideoEca {
    id
    startTime
    description {
      description
    }
  }
`
