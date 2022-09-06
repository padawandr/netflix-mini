export interface IUser {
  id: number
  name: string
  email: string
  password?: string
  country: string
  watchedCount: number
  watchedLastIds: number[]
}
