import { fetchAPI } from '../../api'

export async function getGuide(slug: any) {
  const data = await fetchAPI(`
  {
    guide(id: "${slug}", idType: SLUG) {
      id
      title
      modified
      content(format: RENDERED)
      guideCategories {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
    guides(first: 5, where: {status: PUBLISH}) {
      nodes {
        id
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
