import { fetchAPI } from '../../api'

export async function getRegion(slug: any) {
  const data = await fetchAPI(`
  {
    region(id: "${slug}", idType: SLUG) {
      slug
      title
      pageRegion {
        description
        events {
          ... on Event {
            id
            pageEvent {
              contactEmail
              date
              slug
              location
              featuredImage
            }
            title
            excerpt
            slug
          }
        }
        regionSpecificSocialMedia {
          facebook
          twitter
        }
        organisers {
          ... on TeamMember {
            title
            slug
            pageTeam {
              email
              emailVisibleToPublic
              linkedin
              picture {
                mediaItemUrl
              }
              role
              roleType
            }
          }
        }
      }
      pageStaticSidebar {
        banner {
          mediaItemUrl
        }
      }
    }
  }
  `)
  return data?.region
}
