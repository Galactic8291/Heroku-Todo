// Index Resolvers
import { merge } from 'lodash'

import { ResolverMap } from 'types/graphql-utils'
import { todo } from './todo'

export const head: ResolverMap = {
  Query: {
    hello: (_, { name }) => `Hello ${ name || `World` }!!!`
  }
}

export const resolvers = merge(head, todo)

