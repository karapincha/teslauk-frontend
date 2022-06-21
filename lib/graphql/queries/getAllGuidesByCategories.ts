import { fetchAPI } from '../../api'

export async function getAllGuidesByCategories() {
  const data = await fetchAPI(`
  {
    guideCategories(first: 5000) {
      nodes {
        slug
        name
        guides(first: 1000) {
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
