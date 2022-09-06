import { Context, createContext, useContext } from 'react'
import { ICategory, ICountry } from '../interfaces/metrics.interface'
import { IMovie } from '../interfaces/movie.interface'
import { IUser } from '../interfaces/user.interface'
import { mockMetrics } from '../mocks/metrics.mock'
import { mockUsers } from '../mocks/users.mock'
import { getData, setData } from '../services/storage'

interface ContextType {
  saveInitialData: () => void
  getUsers: () => IUser[]
  setUsers: (users: IUser[]) => void
  getCategories: () => ICategory[]
  setCategories: (categories: ICategory[]) => void
  getCountries: () => ICountry[]
  setCountries: (countries: ICountry[]) => void
  updateUserWatched: (user: IUser, movie: IMovie) => void
  updateCountries: (user: IUser, movie: IMovie) => void
  updateCategories: (movie: IMovie) => void
}

interface ProviderProps {
  children: JSX.Element
}

const StorageContext: Context<ContextType> = createContext<ContextType>({
  saveInitialData: () => {},
  getUsers: () => [],
  setUsers: () => {},
  getCategories: () => [],
  setCategories: () => {},
  getCountries: () => [],
  setCountries: () => {},
  updateUserWatched: () => {},
  updateCountries: () => {},
  updateCategories: () => {}
})

export function StorageProvider ({ children }: ProviderProps): JSX.Element {
  function saveInitialData (): void {
    if (!getUsers().length) {
      const users: IUser[] = mockUsers.map(user => {
        const { password, ...others } = user
        return others
      })
      setUsers(users)
    }
    if (!getCategories().length) {
      const categories: ICategory[] = mockMetrics.categories
      setCategories(categories)
    }
    if (!getCountries().length) {
      const countries: ICountry[] = mockMetrics.countries
      setCountries(countries)
    }
  }

  function getUsers (): IUser[] {
    return getData('users')
  }

  function setUsers (users: IUser[]): void {
    setData('users', users)
  }

  function getCategories (): ICategory[] {
    return getData('categories')
  }

  function setCategories (categories: ICategory[]): void {
    setData('categories', categories)
  }

  function getCountries (): ICountry[] {
    return getData('countries')
  }

  function setCountries (countries: ICountry[]): void {
    setData('countries', countries)
  }

  function updateUserWatched (user: IUser, movie: IMovie): void {
    const movieIndex = user.watchedLastIds.findIndex(
      element => element === movie.id
    )
    if (movieIndex >= 0) {
      user.watchedLastIds.splice(movieIndex, 1)
    } else {
      user.watchedLastIds.pop()
    }
    user.watchedLastIds.unshift(movie.id)
    const updatedUsers = getUsers().map(element => {
      if (element.id === user.id) {
        user.watchedCount += 1
        return user
      }
      return element
    })
    setUsers(updatedUsers)
  }

  function updateCountries (user: IUser, movie: IMovie): void {
    const countries = getCountries()
    if (updateCountries.length) {
      const countryIndex = countries.findIndex(
        element => element.name === user.country
      )
      if (countryIndex >= 0) {
        const watchedIndex = countries[countryIndex].watched.findIndex(
          element => element.id === movie.id
        )
        if (watchedIndex >= 0) {
          countries[countryIndex].watched[watchedIndex].count += 1
        } else {
          countries[countryIndex].watched.push({
            id: movie.id,
            title: movie.title,
            count: 1
          })
        }
        setCountries(countries)
      }
    }
  }

  function updateCategories (movie: IMovie): void {
    const genres = movie.genres
    const categories = getCategories()

    for (const genre of genres) {
      const index = categories.findIndex(element => element.id === genre.id)
      const category = categories[index]
      category.count += 1
      categories.splice(index, 1, category)
    }

    setCategories(categories)
  }

  return (
    <StorageContext.Provider
      value={{
        saveInitialData,
        getUsers,
        setUsers,
        getCategories,
        setCategories,
        getCountries,
        setCountries,
        updateUserWatched,
        updateCountries,
        updateCategories
      }}
    >
      {children}
    </StorageContext.Provider>
  )
}

export function useStorage (): ContextType {
  return useContext(StorageContext)
}
