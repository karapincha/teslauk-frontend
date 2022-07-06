import { useQuery, gql } from '@apollo/client'

export const CLEAR_CART = gql`
  mutation CLEAR_CART {
    emptyCart(input: { clearPersistentCart: true }) {
      cart {
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
