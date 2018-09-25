// Todo Schema
import { gql } from 'apollo-server'

export const todo = gql`
  type Todo {
    id: ID!
    item: String!
    completed: Boolean!
  }
  extend type Query {
    todo(id: ID!): Todo!
    todos: [Todo!]
  }
  extend type Mutation {
    createTodo(item: String!): Todo!
    updateTodo(item: String, completed: Boolean): Todo!
    deleteTodo(id: ID!): Boolean!
  }
`

