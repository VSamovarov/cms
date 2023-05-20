import { resolve } from 'path'
import { config } from 'dotenv'

import { Knex } from 'knex'

const __dirname = resolve()

config({ path: resolve(__dirname, '../../.env') })

const dbConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
  migrations: {
    directory: resolve('./migrations'),
  },
  seeds: {
    directory: "./seeds",
  },
}
export default dbConfig
