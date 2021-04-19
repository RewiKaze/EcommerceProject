import { gql } from '@apollo/client'
export const PROMOTION_QUERY = gql`
query{
  promotions{
    imageUrl
    type
    name
    description
    amount
    active
    code
    endDate
    discount
    minimumPrice
    timestamp
    category{
      name
    }
    product{
      name
    }
  }
}
`
