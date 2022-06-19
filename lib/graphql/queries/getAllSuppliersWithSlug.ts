import { fetchAPI } from '../../api'

export async function getAllSuppliersWithSlug() {
  const data = await fetchAPI(`
    {
      suppliers(first: 70) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}
