import { graphql } from 'gatsby'

export const extras = graphql`
  fragment extras on ContentfulExtras {
    name
    description {
      description
    }
    content {
      ...videoECA
      ...imageECA
    }
  }
`
