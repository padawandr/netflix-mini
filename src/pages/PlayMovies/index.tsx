import { useParams } from 'react-router-dom'
import { Wrapper } from './styles'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {
  MdFullscreen,
  MdOutlineSubtitles,
  MdPlayArrow,
  MdVolumeUp
} from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useNetflix } from '../../contexts/NetflixProvider'
import { colors } from '../../styles/pallete'
import notFound from '../../assets/not-found.jpg'
import { useAuth } from '../../contexts/AuthProvider'
import { useStorage } from '../../contexts/StorageProvider'
import { IMovie } from '../../interfaces/movie.interface'
import { Spinner } from '../../components/Spinner'
import { environment } from '../../environment'

export function PlayMovies (): JSX.Element {
  const { id } = useParams()
  const { loadMovieById } = useNetflix()
  const { user } = useAuth()
  const { updateUserWatched, updateCountries, updateCategories } = useStorage()
  const { imgUrlOriginal } = environment

  const [nowPlaying, setNowPlaying] = useState<IMovie | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (id && user) {
      setLoading(true)
      loadMovieById(Number(id))
        .then(movie => {
          setNowPlaying(movie)
          updateUserWatched(user, movie)
          updateCountries(user, movie)
          updateCategories(movie)
        })
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
      {nowPlaying && (
        <>
          <div className='playing'>
            <img
              src={
                nowPlaying.backdrop_path
                  ? `${imgUrlOriginal}${nowPlaying.backdrop_path}`
                  : notFound
              }
              alt={nowPlaying.title}
            />
          </div>
          <div className='action'>
            <div className='timeframe'>
              <Slider
                railStyle={{ background: colors.dim, height: '2px' }}
                handleStyle={{ display: 'none' }}
                trackStyle={{ background: colors.primary, height: '2px' }}
              />
              <span>0:00:00</span>
            </div>
            <div className='controls'>
              <button className='control'>
                <MdOutlineSubtitles />
              </button>
              <button className='control'>
                <MdPlayArrow />
              </button>
              <span className='title'>{nowPlaying.title}</span>
              <button className='control'>
                <MdVolumeUp />
              </button>
              <button className='control'>
                <MdFullscreen />
              </button>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  )
}
