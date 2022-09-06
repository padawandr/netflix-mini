export interface IMetrics {
  categories: ICategory[]
  countries: ICountry[]
}

export interface ICategory {
  id: number
  name: string
  count: number
}

export interface ICountry {
  name: string
  watched: IWatched[]
}

export interface IWatched {
  id: number
  title: string
  count: number
}
