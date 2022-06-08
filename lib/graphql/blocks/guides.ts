import { fetchAPI } from '../../api'

export async function getGuidesBlock() {
  const data = await fetchAPI(
    `query getGuidesBlock {
      block(id: "guides", idType: SLUG) {
        blockGuides {
          description
          heading
          hint
          primaryButtonText
          subHeading
          categories {
            description
            name
            taxonomyIcon {
              icon {
                mediaItemUrl
              }
            }
            slug
          }
        }
        slug
      }
    }
    `
  )
  return data
}
