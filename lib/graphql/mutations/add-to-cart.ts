import { useQuery, gql } from '@apollo/client'

export const ADD_TO_CART = gql`
  mutation ADD_TO_CART($productId: Int!, $quantity: Int = 1) {
    addCartItems(input: { items: { productId: $productId, quantity: $quantity } }) {
      cart {
        total
        contents {
          nodes {
            key
            product {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`
