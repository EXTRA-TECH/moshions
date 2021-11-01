import gql from "graphql-tag";

export const PRODUCT = gql`
  query(
    $id: ID
  ) {
  product(id: $id, channel: "channel-rwf") {
    id
    name
    description
    slug
    images {
      url
      id
      alt
      sortOrder
    }
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
        }
        stop {
          net {
            amount
          }
          gross {
            amount
          }
        }
      }
    }
    
  }
}
`