import { Knex } from 'knex'

const dbConfig: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: ':memory:',
  },
  migrations: {
    directory: './migrations',
  },
}
export default dbConfig
