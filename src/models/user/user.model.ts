import { Model } from 'objection'
import { UserProps } from './user.props.js'

export class UserModel extends Model {
  static tableName = 'users'

  id: number
  name: string
  email: string

  constructor(props: UserProps) {
    super()
    this.id = props.id
    this.name = props.name
    this.email = props.email
  }
}
