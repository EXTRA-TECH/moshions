import {gql} from '@apollo/react-hooks'

export const MEMBERS = gql`
  query {
    members {
      results {
        id
      }
    }
  }
`