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

export const PRODUCTS = gql`
  query {
  category(slug: "slider") {
    id
    slug
    name
    products(first: 10, channel: "default-channel") {
      edges {
        node {
          id
          media {
            url
            alt
          }
        }
      }
    }
  }
}`
