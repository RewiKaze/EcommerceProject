import { gql } from '@apollo/client'
export const PRODUCT_QUERY = gql`
query{
  products{
    _id
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
