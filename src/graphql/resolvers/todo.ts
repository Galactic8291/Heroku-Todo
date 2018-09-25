// Todo Resolver
import { ResolverMap } from 'types/graphql-utils'

export const todo: ResolverMap = {
  Query: {
    todo: async (_, { id }, { Todo }) => (
      await Todo.findOne(id)
    ),
    todos: async (_, {}, { Todo }) => (
      await Todo.find()
    )
  },
  Mutation: {
    createTodo: async (_, { item }, { Todo }) => {
      const todo = Todo.create({ item })

      await todo.save()
      return todo
    },
    updateTodo: async (_, { id, ...args }, { Todo }) => {
      await Todo.update({ id, args })
      return await Todo.findOne(id)
    },
    deleteTodo: async (_, { id }, { Todo }) => {
      try {
        await Todo.remove({ id })
        return true
      } catch(error) {
        return false
      }
    }
  }
}

