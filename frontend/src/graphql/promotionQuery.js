import { gql } from '@apollo/client'
export const PROMOTION_QUERY = gql`
query{
  promotions{
    _id
    name
    amount
    discount
    productId
    timestamp
    product{
      name
      price
    }
    total
  }
}
`
