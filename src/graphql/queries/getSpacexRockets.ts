import { gql } from '@apollo/client'

const GET_SPACEX_ROCKETS = gql`
  query {
    rockets {
      id
    }
  }
`

export default GET_SPACEX_ROCKETS
