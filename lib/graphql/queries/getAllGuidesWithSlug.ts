import { fetchAPI } from '../../api'

export async function getAllGuidesWithSlug() {
  const data = await fetchAPI(`
    {
      guides(first: 500) {
        edges {
          node {
            slug
            title
            guideCategories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    }
  `)
  return data?.guides
}
