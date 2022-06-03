import { fetchAPI } from '../../api'

export async function getFooterBlock() {
  const data = await fetchAPI(
    `query getFooterBlock {
      block(id: "footer", idType: SLUG) {
        slug
        blockFooter {
          address
          bottomLinks {
            link
            name
          }
          description
          email
          linkBlock1Heading
          linkBlock1Links {
            link
            name
          }
          linkBlock2Heading
          linkBlock2Links {
            link
            name
          }
          linkBlock3Heading
          linkBlock3Links {
            link
            name
          }
          phone
        }
      }
    }
    `
  )
  return data
}
