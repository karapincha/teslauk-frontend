import { useQuery, gql } from '@apollo/client'

export const SEARCH_SUPPLIERS = gql`
  query searchSuppliers($string: String!) {
    suppliers(where: { search: $string }) {
      nodes {
        id
        title
        slug
        supplierTags {
          edges {
            node {
              slug
              name
            }
          }
        }
        pageSupplier {
          address
          description
          email
          isFeatured
          isVerified
          location {
            latitude
            longitude
          }
          name
          phone
          rating
          website
          logo {
            mediaItemUrl
          }
        }
      }
    }
  }
`
