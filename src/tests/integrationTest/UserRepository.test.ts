import { UserRepository } from '../../repositories/UserRepository.ts'
import { UserModel } from '../../models/UserModel.ts'
import { setupDatabase, teardownDatabase, getConnection } from '../helpers/database.ts'
import { Knex as KnexInterface } from 'knex'

describe('UserRepository (Integration)', () => {
  let userRepository: UserRepository
  const connect: KnexInterface = getConnection()

  beforeAll(async () => {
    // Установка базы данных
    await setupDatabase()
    // Создание экземпляра UserRepository с реальным подключением к базе данных
    userRepository = new UserRepository()
  })

  afterAll(async () => {
    // Очистка базы данных
    await teardownDatabase()
  })

  beforeEach(async () => {
    // Удаление всех пользователей перед каждым тестом
    await connect(UserModel.tableName).del()
  })

  describe('getById', () => {
    it('should return null if user does not exist', async () => {
      const id = 1

      const result = await userRepository.getById(id)

      expect(result).toBeNull()
    })

    it('should return the user if user exists', async () => {
      const id = 1
      const name = 'John'
      const email = 'john@example.com'

      await connect(UserModel.tableName).insert({ id, name, email })

      const result = await userRepository.getById(id)

      expect(result).toEqual({ id, name, email })
    })
  })

  // Остальные тесты для других методов UserRepository
})
