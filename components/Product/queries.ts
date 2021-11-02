import gql from "graphql-tag";

export const PRODUCT = gql`
  query(
    $id: ID
  ) {
  product(id: $id, channel: "channel-rwf") {
    id
    category {
      name
      slug
      id
    }
    name
    description
    slug
    images {
      url
      id
      alt
      sortOrder
    }
    variants {
      media {
        url
        alt
      }
      metadata {
        key
        value
      }
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