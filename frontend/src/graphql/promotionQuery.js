import { gql } from '@apollo/client'
export const PROMOTION_QUERY = gql`
query{
  promotions{
    _id
    imageUrl
    name
    description
    amount
    code
    endDate
    discount
    timestamp
    product{
      name
    }
  }
}
`
