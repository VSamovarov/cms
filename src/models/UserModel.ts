import { Model } from 'objection'

export class UserModel extends Model {
  static tableName = 'users'
  id!: number
  name!: string
  email!: string

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'name', 'email'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string' },
      },
    }
  }
}
