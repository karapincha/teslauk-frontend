import { fetchAPI } from '../../api'

export async function getStaticPage(slug: any) {
  const data = await fetchAPI(`
  {
    staticPage(id: "${slug}", idType: SLUG) {
      id
      slug
      title
    }
  }
  `)
  return data
}
