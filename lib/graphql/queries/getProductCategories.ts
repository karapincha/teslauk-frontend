import { fetchAPI } from '../../api'

export async function getProductCategories() {
  const data = await fetchAPI(`
  {
    productCategories {
      nodes {
        count
        id
        name
        slug
      }
    }
  }
  `)
  return data?.productCategories
}
