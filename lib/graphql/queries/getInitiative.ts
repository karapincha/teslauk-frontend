import { fetchAPI } from '../../api'

export async function getInitiative(slug: any) {
  const data = await fetchAPI(`
  {
    initiative(id: "${slug}", idType: SLUG) {
      id
      slug
      title
      content
      pageInitiative {
        excerpt
      }
      pageInitiativeSidebar {
        thumbnail {
          mediaItemUrl
        }
      }
    }
  }
  `)
  return data.initiative
}
