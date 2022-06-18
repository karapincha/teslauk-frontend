import { fetchAPI } from '../../api'

export async function getAllStaticPagesWithSlug() {
  const data = await fetchAPI(`
    {
      staticPages(first: 1000) {
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
