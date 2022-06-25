import { fetchAPI } from '../../api'

export async function getAllFormsWithSlug() {
  const data = await fetchAPI(`
  {
    forms(first: 100) {
      edges {
        node {
          slug
        }
      }
    }
  }
  `)
  return data?.forms
}
