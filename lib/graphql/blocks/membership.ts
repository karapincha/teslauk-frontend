import { fetchAPI } from '../../api'

export async function getMembershipBlock() {
  const data = await fetchAPI(
    `query getMembershipBlock {
      block(id: "join-club", idType: SLUG) {
        blockMembership {
          description
          heading
          subHeading
          freeMemberBlock {
            heading
            price
            primaryButtonText
            features {
              feature
            }
          }
          supporterMemberBlock {
            heading
            price
            primaryButtonText
            secondaryButtonText
            features {
              feature
            }
          }
        }
        slug
      }
    }
    `
  )
  return data
}
