import { fetchAPI } from '../../api'

export async function getAllDiscussionGroupsWithSlug() {
  const data = await fetchAPI(`
    {
      discussionGroups(first: 50) {
        nodes {
          title
          pageDiscussionGroup {
            banner {
              mediaItemUrl
            }
            excerpt
            features {
              label
            }
            ismaingroup
            membersCount
            visibility
            link
          }
        }
      }
    }
  `)
  return data?.discussionGroups?.nodes
}
