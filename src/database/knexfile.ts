
import { resolve } from 'path'
import {config} from 'dotenv'
config({ path: resolve(__dirname, '../../.env') })

console.log({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
})

module.exports = {
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
}
