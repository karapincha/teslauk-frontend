import { fetchAPI } from '../../api'

export async function searchGuides(search?: any) {
  const data = await fetchAPI(`
    {
      guides(first: 500, where: {search: "${search}"}) {
        nodes {
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
  `)
  return data?.guides
}
