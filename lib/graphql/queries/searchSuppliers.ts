import { useQuery, gql } from '@apollo/client'

export const SEARCH_SUPPLIERS = gql`
  query SearchSuppliers($search: String) {
    suppliers(first: 100, where: { search: $search }) {
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
          excerpt
          website
          logo {
            mediaItemUrl
          }
        }
      }
    }
  }
`
