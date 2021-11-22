import { PRODUCT_VARIANTS } from './../gql/product/variants';
import gql from 'graphql-tag'

export const CHECKOUT_LINES = gql`
  query {
    checkoutLines(first:3) {
      edges {
        node {
          id
          variant {
            media {
              url
              alt
            }
          }
        }
      }
    }
  }
`