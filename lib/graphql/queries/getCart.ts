import { useQuery, gql } from '@apollo/client'

export const GET_CART = gql`
  {
    cart {
      contentsTotal
      isEmpty
      subtotal
      total
      contents {
        itemCount
        productCount
        nodes {
          quantity
          subtotal
          total
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
`
