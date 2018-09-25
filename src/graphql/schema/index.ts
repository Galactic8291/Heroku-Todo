// Index Schema
import { gql } from 'apollo-server'

import { todo } from './todo'

export const head = gql`
  type Query {
    hello(name: String): String!
  }
  type Mutation {
    _: Boolean
  }
`

export const schema = [
  head, todo
]

