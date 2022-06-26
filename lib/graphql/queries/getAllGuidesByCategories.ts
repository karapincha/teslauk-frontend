import { fetchAPI } from '../../api'

export async function getAllGuidesByCategories() {
  const data = await fetchAPI(`
  {
    guideCategories(first: 500) {
      nodes {
        slug
        name
        guides(first: 500) {
          nodes {
            slug
            title
            id
          }
        }
      }
    }
    guides(first: 500) {
      pageInfo {
        total
      }
    }
  }
  `)
  return data
}
