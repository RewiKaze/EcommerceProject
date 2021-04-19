import { gql } from '@apollo/client'
export const PRODUCT_QUERY = gql`
query{
  products{
    name
    slug
    description
    price
    imageUrl
    quantity
    tags
    timestamp
    category{
      name
      slug
    }
  }
}
`
