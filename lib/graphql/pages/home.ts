import { fetchAPI } from '../../api'

export async function getHomePage() {
  const data = await fetchAPI(
    `query getHomePage {
      hero: block(id: "block-hero", idType: SLUG) {
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
      featuredEvents: block(id: "featured-events", idType: SLUG) {
        blockFeaturedEvents {
          description
          heading
          primaryButtonText
          subHeading
          featuredImage {
            mediaItemUrl
          }
          featuredEvents {
            ... on Event {
              id
              pageEvent {
                contactEmail
                date
                location
                time
                featuredImage {
                  mediaItemUrl
                }
                mapLocation {
                  latitude
                  longitude
                }
              }
              title
              excerpt
            }
          }
        }
        slug
      }
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
      testimonials: block(id: "testimonials", idType: SLUG) {
        blockTestimonials {
          description
          heading
          primaryButtonText
          subHeading
          featuredTestimonial {
            ... on Testimonial {
              id
              title
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
        }
        slug
      }
      guides: block(id: "guides", idType: SLUG) {
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
      cta: block(id: "call-to-action", idType: SLUG) {
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
      footer: block(id: "footer", idType: SLUG) {
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
