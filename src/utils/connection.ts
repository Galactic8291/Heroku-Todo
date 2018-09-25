// Connection Config
import { createConnection, getConnectionOptions } from 'typeorm'
import { Todo } from 'db/entity/Todo'

export const create = async () => {
  const env = process.env.NODE_ENV

  if(env === 'production') {
    return createConnection({
      name: 'default',
      type: 'postgres',
      logging: true,
      entities: [ Todo ]
    })
  } else {
    const connectionOptions = await getConnectionOptions(env)
    return createConnection({ ...connectionOptions, name: 'default' })
  }
}

