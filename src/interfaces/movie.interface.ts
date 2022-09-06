export interface IMovie {
  backdrop_path: string
  genres: IGenre[]
  id: number
  name: string
  original_name: string
  original_title: string
  overview: string
  poster_path: string
  title: string
}

export interface IGenre {
  id: number
  name: string
}

export interface IShowcase {
  title: string
  movies: IMovie[]
}
