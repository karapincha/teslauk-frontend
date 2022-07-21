import { fetchAPI } from '../../api'

export async function getAllRegionsWithSlug() {
  const data = await fetchAPI(`
    {
      regions(first: 50) {
        nodes {
          slug
          title
        }
      }
    }
  `)
  return data?.regions
}
