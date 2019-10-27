import { graphql } from 'gatsby'

export const videoECA = graphql`
  fragment videoECA on ContentfulVideoEca {
    ytId
    startTime
    description {
      description
    }
  }
`
