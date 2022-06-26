import { fetchAPI } from '../../api'

export async function getGuidesByCategory(slug: any) {
  const data = await fetchAPI(`
  {
    guideCategory(id: "${slug}", idType: SLUG) {
      id
      name
      slug
      guides(first: 500) {
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
    guideCategories {
      nodes {
        name
        slug
      }
    }
    guides(first: 5) {
      nodes {
        slug
        title
      }
      pageInfo {
        total
      }
    }
  }
  `)
  return data
}
