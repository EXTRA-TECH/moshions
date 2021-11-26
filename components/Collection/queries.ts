import { COLLECTIONS } from './../Home/queries';
import gql from 'graphql-tag'

export const COLLECTION = gql`
  query(
    $slug: String
  ) {
    collection(slug: $slug, , channel: "channel-rwf") {
      id
      name
      description
      slug
      products(first: 6, channel: "channel-rwf") {
        edges {
          node {
            id
            name
            slug
            metadata {
              key
              value
            }
            pricing {
              priceRange {
                start {
                  net {
                    amount
                  }
                  gross {
                    amount
                  }
                  tax {
                    amount
                  }
                }
                stop {
                  net {
                    amount
                  }
                  gross {
                    amount
                  }
                  tax {
                    amount
                  }
                }
              }
            }
            images {
              id
              alt
              url
              sortOrder
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