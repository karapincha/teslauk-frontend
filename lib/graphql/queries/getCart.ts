import { useQuery, gql } from '@apollo/client'

export const GET_CART = gql`
  {
    cart {
      contentsTotal
      isEmpty
      subtotal
      total
      contents {
        itemCount
        productCount
        nodes {
          quantity
          subtotal
          total
          key
          product {
            node {
              name
              image {
                mediaItemUrl
              }
              sku
              ... on SubscriptionVariableProduct {
                id
                name
                price
                regularPrice
                salePrice
                sku
                stockQuantity
              }
              ... on SubscriptionProduct {
                id
                name
                price
                regularPrice
                salePrice
                sku
                stockQuantity
              }
              ... on SimpleProduct {
                id
                name
                price
                regularPrice
                salePrice
                sku
                stockQuantity
              }
              ... on GroupProduct {
                id
                name
                price
                sku
              }
              ... on ExternalProduct {
                id
                name
                price
                regularPrice
                salePrice
                sku
              }
              ... on VariableProduct {
                id
                name
                price
                regularPrice
                salePrice
                sku
                stockQuantity
              }
            }
          }
          tax
          subtotalTax
        }
      }
      totalTax
      totalTaxes {
        amount
        isCompound
        label
      }
      subtotalTax
      shippingTotal
      shippingTax
      needsShippingAddress
      feeTotal
      feeTax
      fees {
        amount
        name
        total
        taxClass
        taxable
      }
      displayPricesIncludeTax
      discountTotal
      discountTax
      contentsTax
    }
  }
`
