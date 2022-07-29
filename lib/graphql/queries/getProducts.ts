import { fetchAPI } from '../../api'

export async function getProducts() {
  const data = await fetchAPI(`
  {
    products {
      nodes {
        featured
        id
        name
        sku
        slug
        onSale
        databaseId
        purchasable
        image {
          mediaItemUrl
        }
        ... on SimpleProduct {
          id
          name
          price
          productCategories {
            nodes {
              count
              name
              slug
            }
          }
        }
        ... on SubscriptionProduct {
          id
          name
          price
          productCategories {
            nodes {
              count
              name
              slug
            }
          }
        }
        ... on SubscriptionVariableProduct {
          id
          name
          price
          productCategories {
            nodes {
              count
              name
              slug
            }
          }
        }
      }
    }
  }
  `)
  return data?.products
}
