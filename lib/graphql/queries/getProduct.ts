import { fetchAPI } from '../../api'

export async function getProduct(slug: any) {
  const data = await fetchAPI(`
  {
    product(id: "${slug}", idType: SLUG) {
      id
      featured
      galleryImages {
        nodes {
          mediaItemUrl
        }
      }
      image {
        mediaItemUrl
      }
      productCategories {
        nodes {
          name
          slug
        }
      }
      purchasable
      slug
      status
      sku
      ... on VariableProduct {
        id
        name
        salePrice
        price
        stockQuantity
      }
      ... on ExternalProduct {
        id
        name
        salePrice
        price
      }
      ... on GroupProduct {
        id
        name
        price
      }
      ... on SubscriptionVariableProduct {
        id
        name
        salePrice
        price
        stockQuantity
      }
      ... on SubscriptionProduct {
        id
        name
        salePrice
        price
        stockQuantity
      }
      ... on SimpleProduct {
        id
        name
        salePrice
        price
        stockQuantity
      }
    }
  }
  `)
  return data?.product
}
