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
      id
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

export const CHECKOUT_CREATE = gql`
  mutation(
    $variantId: ID!,
    $quantity: Int!
  ) {
    checkoutCreate(
      input: {
        channel: "default-channel",
        email: "customer@example.com"
        lines: [{quantity: $quantity, variantId: $variantId}]
      }
    ) {
      checkout {
        id
        token
        totalPrice {
          gross {
            amount
            currency
          }
        }
        isShippingRequired
        availableShippingMethods {
          id
          name
        }
        availableCollectionPoints {
          id
          name
          clickAndCollectOption
        }
        availablePaymentGateways {
          id
          name
          config {
            field
            value
          }
        }
      }
      checkoutErrors {
        field
        code
      }
    }
  }
`