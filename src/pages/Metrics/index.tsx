import { useEffect, useState } from 'react'
import { useStorage } from '../../contexts/StorageProvider'
import { ICategory, ICountry } from '../../interfaces/metrics.interface'
import { IUser } from '../../interfaces/user.interface'
import { Wrapper } from './styles'
import { BiMedal } from 'react-icons/bi'

export function Metrics (): JSX.Element {
  const { getUsers, getCategories, getCountries } = useStorage()

  const [users, setUsers] = useState<IUser[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])
  const [countries, setCountries] = useState<ICountry[]>([])

  useEffect(() => {
    setUsers(
      getUsers()
        .sort((a, b) => b.watchedCount - a.watchedCount)
        .slice(0, 3)
    )
    setCategories(
      getCategories()
        .sort((a, b) => b.count - a.count)
        .slice(0, 3)
    )
    setCountries(
      getCountries().map(country => ({
        name: country.name,
        watched: country.watched.sort((a, b) => b.count - a.count).slice(0, 3)
      }))
    )
  }, [])

  return (
    <Wrapper>
      <h1 className='heading'>Metrics</h1>
      <section className='section'>
        <h2>Who Watched The Most Movies</h2>
        <div className='ranking'>
          {users?.map((user, index) => (
            <div key={user.id} className='row'>
              <BiMedal className={`medal${index + 1}`} />
              <span>{user.name}</span>
              <span>({user.country}):</span>
              <span>{user.watchedCount} movies</span>
            </div>
          ))}
        </div>
      </section>
      <section className='section'>
        <h2>Most Watched Genres</h2>
        <div className='ranking'>
          {categories?.map((category, index) => (
            <div key={category.id} className='row'>
              <BiMedal className={`medal${index + 1}`} />
              <span>{category.name}:</span>
              <span>{category.count} times</span>
            </div>
          ))}
        </div>
      </section>
      <section className='section'>
        <h2>Most Watched Movies By Country</h2>
        {countries?.map((country, key) => (
          <div key={key} className='ranking'>
            <strong>{country.name}</strong>
            <div className='watched'>
              {country.watched.map((movie, index) => (
                <div key={movie.id} className='row'>
                  <BiMedal className={`medal${index + 1}`} />
                  <span>{movie.title}:</span>
                  <span>{movie.count} times</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Wrapper>
  )
}
