import { useQuery, gql } from '@apollo/client'

export const UPDATE_ITEM_QTY = gql`
  mutation UPDATE_ITEM_QTY($quantity: Int!, $key: ID!) {
    updateItemQuantities(input: { items: { key: $key, quantity: $quantity } }) {
      items {
        quantity
      }
    }
  }
`
