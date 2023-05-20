import { UserModel } from '../models/UserModel.ts'
import type { UserRepository as UserRepositoryInterface } from '../interfaces/UserRepository.ts'
import type { User } from '../interfaces/User.ts'

export class UserRepository implements UserRepositoryInterface {
  async getById(id: number): Promise<User | null> {
    const user = await UserModel.query().findById(id)
    return user || null
  }

  async getAll(): Promise<User[]> {
    return UserModel.query()
  }

  async create(user: User): Promise<User> {
    return UserModel.query().insert(user)
  }

  async update(id: number, userData: Partial<User>): Promise<User | null> {
    const updatedUser = await UserModel.query().patchAndFetchById(id, userData)
    return updatedUser || null
  }

  async delete(id: number): Promise<boolean> {
    const numDeleted = await UserModel.query().deleteById(id)
    return numDeleted > 0
  }
}
