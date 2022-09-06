import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IMovie, IShowcase } from '../../interfaces/movie.interface'
import { Wrapper } from './styles'
import notFound from '../../assets/not-found.jpg'
import { environment } from '../../environment'

interface Props {
  showcase: IShowcase
}

export function Hero ({ showcase }: Props): JSX.Element {
  const { imgUrlOriginal } = environment
  const [movie, setMovie] = useState<IMovie | null>(null)

  useEffect(() => {
    const index = Math.floor(Math.random() * showcase.movies.length)
    setMovie(showcase.movies[index])
  }, [showcase])

  return (
    <Wrapper>
      {movie && (
        <Link to={`/play/${movie.id}`}>
          <img
            src={
              movie.backdrop_path
                ? `${imgUrlOriginal}${movie.backdrop_path}`
                : notFound
            }
          />
          <div className='container'>
            <div className='about'>
              <h1 className='title'>{movie.title || movie.original_title}</h1>
              <p className='overview'>{movie.overview}</p>
            </div>
          </div>
        </Link>
      )}
    </Wrapper>
  )
}
