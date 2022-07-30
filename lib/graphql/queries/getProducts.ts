import { fetchAPI } from '../../api'

export async function getProducts() {
  const data = await fetchAPI(`
  {
    products(where: {categoryNotIn: "memberships"}) {
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
          salePrice
          price
          stockQuantity
          description
          shortDescription
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
          salePrice
          price
          stockQuantity
          description
          shortDescription
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
          salePrice
          price
          stockQuantity
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
