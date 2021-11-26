import gql from 'graphql-tag'

export const PRODUCT_VARIANTS = gql`
  query(
    $ids: [ID]
  ) {
    productVariants(first: 10, ids: $ids, channel: "channel-rwf") {
      edges {
        node {
          id
          name
          product {
            id
            name
            description
            images {
              url
              alt
            }
            thumbnail {
              url
              alt
            }
          }
        }
      }
    }
  }
`