// Index File
import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'

import { schema } from 'graphql/schema'
import { resolvers } from 'graphql/resolvers'
import { create } from 'utils/connection'
import { Todo } from 'db/entity/Todo'

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    Todo
  }
})

create().then(conn => {

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
    if(process.env.NODE_ENV !== 'test') conn.runMigrations()
  })
})

