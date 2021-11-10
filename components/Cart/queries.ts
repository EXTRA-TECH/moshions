import gql from 'graphql-tag'

export const LINESADD = gql`
  mutation {
    checkoutLinesAdd(
      token: "4b22fbc0-b095-4937-a08e-bd18d04c951a",
      lines: [{ quantity: 1, variantId: "UHJvZHVjdFZhcmlhbnQ6Mjc0" }]
    ) {
      checkout {
        lines{
          id
          variant{
            name
          }
          quantity
        }
        totalPrice {
          gross {
            currency
            amount
          }
        }
      }
    }
  }
`