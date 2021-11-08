import gql from 'graphql-tag'

export const COLLECTIONS = gql`
  query {
    collections(first: 3, channel: "default-channel") {
      edges {
        node {
          id
          name
          slug
          backgroundImage {
            url
            alt
          }
          description
        }
      }
    }
  }
`