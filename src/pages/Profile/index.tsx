import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'
import { useAuth } from '../../contexts/AuthProvider'
import { useNetflix } from '../../contexts/NetflixProvider'
import { environment } from '../../environment'
import { IMovie } from '../../interfaces/movie.interface'
import { Wrapper } from './styles'

export function Profile (): JSX.Element {
  const { user } = useAuth()
  const { loadWatchedMovies } = useNetflix()
  const { imgUrlSmall } = environment

  const [watchedMovies, setWatchedMovies] = useState<IMovie[]>([])
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (user) {
      loadWatchedMovies(user.watchedLastIds)
        .then(movies => setWatchedMovies(movies))
        .catch(error => setErrorMessage(error.message))
        .finally(() => setLoading(false))
    }
  }, [])

  return (
    <Wrapper>
      {loading && <Spinner />}
      {!loading && errorMessage && (
        <p>{`Could not load data. ${errorMessage}`}</p>
      )}
      <h1 className='title'>Account</h1>
      {user && (
        <div className='info'>
          <div className='field'>
            <strong>Name:</strong>
            <span>{user.name}</span>
          </div>
          <div className='field'>
            <strong>Email:</strong>
            <span>{user.email}</span>
          </div>
          <div className='field'>
            <strong>Country:</strong>
            <span>{user.country}</span>
          </div>
          <div className='field'>
            <strong>Total Watched:</strong>
            <span>{user.watchedCount} movies</span>
          </div>
          <div className='movies'>
            <strong>Last Movies Watched</strong>
            <div className='watched'>
              {watchedMovies.map(movie => (
                <Link to={`/play/${movie.id}`} key={movie.id}>
                  <img
                    className='poster'
                    src={`${imgUrlSmall}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  )
}
