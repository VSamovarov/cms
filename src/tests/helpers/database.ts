import { Knex as KnexInterface, knex } from 'knex'

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: ':memory:',
  },
  migrations: {
    directory: './src/database/migrations',
  },
})

export async function setupDatabase(): Promise<void> {
  await connection.migrate.latest()
}

export async function teardownDatabase(): Promise<void> {
  await connection.migrate.rollback()
}

export function getConnection(): KnexInterface {
  return connection
}
