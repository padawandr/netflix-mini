import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IShowcase } from '../../interfaces/movie.interface'
import { Wrapper } from './styles'
import notFound from '../../assets/not-found.jpg'
import { Link } from 'react-router-dom'
import { environment } from '../../environment'

interface Props {
  showcase: IShowcase
}

export function Showcase ({ showcase }: Props): JSX.Element {
  const rowRef = useRef<HTMLDivElement>(null)
  const { imgUrlSmall } = environment

  function handleMove (direction: string): void {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <Wrapper>
      <h2 className='title'>{showcase.title}</h2>
      <div className='list'>
        <button className='control-left' onClick={() => handleMove('left')}>
          <FaChevronLeft />
        </button>
        <div className='movies' ref={rowRef}>
          {showcase.movies.map(movie => (
            <Link to={`/play/${movie.id}`} key={movie.id} className='movie'>
              <img
                className='thumbnail'
                src={
                  movie.backdrop_path
                    ? `${imgUrlSmall}${movie.backdrop_path}`
                    : notFound
                }
                alt={movie.title || movie.original_title}
              />
              <h3 className='title'>
                {movie.name ||
                  movie.original_name ||
                  movie.title ||
                  movie.original_title}
              </h3>
            </Link>
          ))}
        </div>
        <button className='control-right' onClick={() => handleMove('right')}>
          <FaChevronRight />
        </button>
      </div>
    </Wrapper>
  )
}
