import { useQuery, gql } from '@apollo/client'

export const SEARCH_GUIDES = gql`
  query SearchSuppliers($search: String) {
    guides(first: 500, where: { search: $search }) {
      nodes {
        id
        slug
        title
        status
        pageGuide {
          excerpt
          thumbnail {
            mediaItemUrl
          }
        }
        guideCategories {
          nodes {
            name
            slug
          }
        }
      }
      pageInfo {
        total
      }
    }
  }
`
