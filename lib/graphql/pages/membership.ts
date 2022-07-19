import { fetchAPI } from '../../api'

export async function getMembershipPage() {
  const data = await fetchAPI(
    `query getMembershipPage {
      membershipBlock: block(id: "join-club", idType: SLUG) {
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
      testimonials: testimonials(first: 100) {
        nodes {
          pageTestimonial {
            author
            role
            testimonial
            image {
              mediaItemUrl
            }
          }
        }
      }
      page: staticPage(id: "membership", idType: SLUG) {
        faq {
          faqList {
            answer
            question
          }
          faqOverline
          faqHeading
        }
        staticPageHeader {
          description
          heading
          overline
        }
      }
    }
    `
  )
  return data
}
