import { fetchAPI } from '../../api'

export async function getHeroBlock() {
  const data = await fetchAPI(
    `query getHeroBlock {
      block(id: "block-hero", idType: SLUG) {
        blockHero {
          description
          fieldGroupName
          heading
          primaryButtonText
          secondaryButtonText
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
