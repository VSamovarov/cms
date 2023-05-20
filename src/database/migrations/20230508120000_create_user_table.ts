import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('user', (table) => {
    table.increments('id').primary()
    table.string('username').notNullable()
    table.string('email').notNullable()
    table.dateTime('email_verified_at').notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('user')
}
