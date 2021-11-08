import gql from 'graphql-tag'

export const CATEGORY = gql`
  query(
    $slug: String
  ) {
    category(slug: $slug) {
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