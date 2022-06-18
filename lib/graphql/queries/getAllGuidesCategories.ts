import { useQuery, gql } from '@apollo/client'

export const GUIDES_CATEGORIES = gql`
  {
    guideCategories {
      edges {
        node {
          id
          name
          slug
          count
        }
      }
    }
  }
`
