import { gql } from 'apollo-server'

export default gql`
  type User {
    id: Int
    firstName: String
    lastName: String
    age: Int
  }

  type Query {
    users: [User]
  }
`
