import { gql } from '@apollo/client'

export const PLACE_ORDER = gql`
  mutation PLACE_ORDER($input: CheckoutInput!) {
    checkout(input: $input) {
      redirect
      result
      order {
        id
        databaseId
      }
      customer {
        id
      }
    }
  }
`
