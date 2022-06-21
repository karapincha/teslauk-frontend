import { fetchAPI } from '../../api'

export async function getAllInitiativesWithSlug() {
  const data = await fetchAPI(`
  {
    initiatives(first: 50) {
      edges {
        node {
          slug
          title
          pageInitiativeSidebar {
            thumbnail {
              mediaItemUrl
            }
          }
          pageInitiative {
            excerpt
          }
          initiativeTags {
            nodes {
              slug
              name
            }
          }
        }
      }
    }
    initiativeTags(first: 10) {
      nodes {
        name
        slug
      }
    }
  }
  `)

  return data || []
}
