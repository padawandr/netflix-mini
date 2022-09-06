import { IUser } from '../interfaces/user.interface'
import { mockUsers } from '../mocks/users.mock'
import { getData } from './storage'

export function login (email: string, password: string): IUser | null {
  const userFound = mockUsers.find(user => user.email === email)
  if (userFound && userFound.password === password) {
    return userFound
  }
  return null
}

export function findUserById (userId: number): IUser | null {
  const storageUsers: IUser[] = getData('users')
  if (storageUsers.length) {
    return storageUsers.find(user => user.id === userId) ?? null
  }
  return mockUsers.find(user => user.id === userId) ?? null
}
