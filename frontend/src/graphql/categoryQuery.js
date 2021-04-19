import { gql } from '@apollo/client'
export const CATEGORY_QUERY = gql`
query{
  category{
    name
    slug
  }
}
`
