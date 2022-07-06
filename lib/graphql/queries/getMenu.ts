import { fetchAPI } from '../../api'

export async function getMenu() {
  const data = await fetchAPI(
    `query getMenu {
      menu: block(id: "global-header", idType: SLUG) {
        slug
        blockGlobalHeader {
          leftLinks {
            name
            url
          }
          rightLinks {
            name
            url
          }
          sidemenuLinks {
            name
            url
          }
        }
      }
    }
    `
  )
  return data
}
