import { fetchAPI } from '../../api'

export async function getAllGuidesByCategories() {
  const data = await fetchAPI(`
  {
    guideCategories(first: 100) {
      nodes {
        slug
        name
        guides {
          nodes {
            slug
            title
            id
          }
        }
      }
    }
  }
  `)
  return data?.guideCategories?.nodes
}
