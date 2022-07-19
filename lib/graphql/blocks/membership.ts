import { fetchAPI } from '../../api'

export async function getMembershipBlock() {
  const data = await fetchAPI(
    `query getMembershipBlock {
      membership: block(id: "join-club", idType: SLUG) {
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
            footNotes {
              note
            }
          }
          supporterMemberBlock {
            heading
            price
            additionalPrice
            primaryButtonText
            secondaryButtonText
            features {
              feature
            }
            footNotes {
              note
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
