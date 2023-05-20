import { User } from './User.js';

export interface UserRepository {
  getById(id: number): Promise<User | null>

  getAll(): Promise<User[]>

  create(user: User): Promise<User>

  update(id: number, user: Partial<User>): Promise<User | null>

  delete(id: number): Promise<boolean>
}