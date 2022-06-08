import { fetchAPI } from '../../api'

export async function getCtaBlock() {
  const data = await fetchAPI(
    `query getCtaBlock {
      block(id: "call-to-action", idType: SLUG) {
        blockCta {
          description
          heading
          primaryButtonText
          subHeading
          image {
            mediaItemUrl
          }
        }
        slug
      }
    }
    `
  )
  return data
}
