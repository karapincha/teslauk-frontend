import { fetchAPI } from '../../api'

export async function getProduct(slug: any) {
  const data = await fetchAPI(`
  {
    product(id: "${slug}", idType: SLUG) {
      id
      databaseId
      featured
      description
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
        description
        shortDescription
      }
      ... on ExternalProduct {
        id
        name
        salePrice
        price
        description
        shortDescription
      }
      ... on GroupProduct {
        id
        name
        price
        description
        shortDescription
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
        description
        shortDescription
      }
      ... on SimpleProduct {
        id
        name
        salePrice
        price
        stockQuantity
        description
        shortDescription
      }
      pageProduct {
        features {
          feature
        }
        reviews {
          author
          authorLink
          review
        }
        videos {
          youtubeUrl
        }
      }
    }
  }
  `)
  return data?.product
}
