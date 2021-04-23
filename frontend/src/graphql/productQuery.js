import { gql } from '@apollo/client'
export const PRODUCT_QUERY = gql`
query{
  products{
    _id
    name
    description
    type
    quantity
    price
    imageUrl
    tags
    timestamp
  }
}
`
