import { fetchAPI } from '../../api'

export async function getStaticPage(slug: any, optionalQuery?: string, secondaryQuery?: string) {
  const data = await fetchAPI(`
  {
    staticPage(id: "${slug}", idType: SLUG) {
      id
      slug
      title
      pageStatic {
        content
        excerpt
      }
      staticPageHeader {
        banner {
          mediaItemUrl
        }
        description
        heading
      }
      ${optionalQuery ? optionalQuery : ''}
    }
    ${secondaryQuery ? secondaryQuery : ''}
  }
  `)
  return data
}
