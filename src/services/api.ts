import { environment } from '../environment'
import { IMovie, IShowcase } from '../interfaces/movie.interface'

const { apiKey, baseUrl } = environment

const categories: { [key: string]: string } = {
  trending: '/trending/movie/week?api_key=',
  top: '/movie/top_rated?api_key=',
  action: '/discover/movie?with_genres=28&api_key=',
  adventure: '/discover/movie?with_genres=12&api_key=',
  crime: '/discover/movie?with_genres=80&api_key=',
  family: '/discover/movie?with_genres=10751&api_key=',
  horror: '/discover/movie?with_genres=27&api_key=',
  western: '/discover/movie?with_genres=37&api_key='
}

async function fetchMovies (category: string): Promise<IMovie[]> {
  const endpoint = categories[category]
  const response = await fetch(`${baseUrl}${endpoint}${apiKey}`)
  const { results } = await response.json()
  return results
}

export async function getShowcases (): Promise<IShowcase[]> {
  return [
    { title: 'Trending Now', movies: await fetchMovies('trending') },
    { title: 'Top Movies', movies: await fetchMovies('top') },
    { title: 'Action', movies: await fetchMovies('action') },
    { title: 'Adventure', movies: await fetchMovies('adventure') },
    { title: 'Crime', movies: await fetchMovies('crime') },
    { title: 'Family', movies: await fetchMovies('family') },
    { title: 'Horror', movies: await fetchMovies('horror') },
    { title: 'Western', movies: await fetchMovies('western') }
  ]
}

export async function getMovieById (id: number): Promise<IMovie> {
  const endpoint = `/movie/${id}?api_key=`
  const response = await fetch(`${baseUrl}${endpoint}${apiKey}`)
  const result: IMovie = await response.json()
  return result
}

export async function getWatchedMovies (ids: number[]): Promise<IMovie[]> {
  const promises = []
  for (const id of ids) {
    promises.push(getMovieById(id))
  }
  return await Promise.all(promises)
}
