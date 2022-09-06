import { Context, createContext, useContext } from 'react'
import { IMovie, IShowcase } from '../interfaces/movie.interface'
import { getMovieById, getShowcases, getWatchedMovies } from '../services/api'

interface ContextType {
  loadShowcases: () => Promise<IShowcase[]>
  loadMovieById: (id: number) => Promise<IMovie>
  loadWatchedMovies: (ids: number[]) => Promise<IMovie[]>
}

interface ProviderProps {
  children: JSX.Element
}

const NetflixContext: Context<ContextType> = createContext<ContextType>({
  loadShowcases: async () => [],
  loadMovieById: async () => (({} as any) as IMovie),
  loadWatchedMovies: async () => []
})

export function NetflixProvider ({ children }: ProviderProps): JSX.Element {
  async function loadShowcases (): Promise<IShowcase[]> {
    return await getShowcases()
  }

  async function loadMovieById (id: number): Promise<IMovie> {
    return await getMovieById(id)
  }

  async function loadWatchedMovies (ids: number[]): Promise<IMovie[]> {
    return await getWatchedMovies(ids)
  }

  return (
    <NetflixContext.Provider
      value={{
        loadShowcases,
        loadMovieById,
        loadWatchedMovies
      }}
    >
      {children}
    </NetflixContext.Provider>
  )
}

export function useNetflix (): ContextType {
  return useContext(NetflixContext)
}
