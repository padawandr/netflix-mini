import { IMetrics } from '../interfaces/metrics.interface'

export const mockMetrics: IMetrics = {
  categories: [
    { id: 28, name: 'Action', count: 1000 },
    { id: 12, name: 'Adventure', count: 1110 },
    { id: 16, name: 'Animation', count: 1000 },
    { id: 35, name: 'Comedy', count: 1111 },
    { id: 80, name: 'Crime', count: 1000 },
    { id: 99, name: 'Documentary', count: 1000 },
    { id: 18, name: 'Drama', count: 1000 },
    { id: 10751, name: 'Family', count: 1000 },
    { id: 14, name: 'Fantasy', count: 1000 },
    { id: 36, name: 'History', count: 1000 },
    { id: 27, name: 'Horror', count: 1113 },
    { id: 10402, name: 'Music', count: 1000 },
    { id: 9648, name: 'Mystery', count: 1000 },
    { id: 10749, name: 'Romance', count: 1000 },
    { id: 878, name: 'Sci-Fi', count: 1000 },
    { id: 10770, name: 'TV-Movie', count: 1000 },
    { id: 53, name: 'Thriller', count: 1000 },
    { id: 10752, name: 'War', count: 1000 },
    { id: 37, name: 'Western', count: 1112 }
  ],
  countries: [
    {
      name: 'BRA',
      watched: [
        {
          id: 100,
          title: 'Lock, Stock and Two Smoking Barrels',
          count: 200
        },
        {
          id: 111,
          title: 'Scarface',
          count: 199
        },
        {
          id: 122,
          title: 'The Lord of the Rings: The Return of the King',
          count: 201
        },
        {
          id: 133,
          title: 'Primary',
          count: 199
        },
        {
          id: 144,
          title: 'Wings of Desire',
          count: 200
        }
      ]
    },
    {
      name: 'CHN',
      watched: [
        {
          id: 100,
          title: 'Lock, Stock and Two Smoking Barrels',
          count: 200
        },
        {
          id: 111,
          title: 'Scarface',
          count: 200
        },
        {
          id: 122,
          title: 'The Lord of the Rings: The Return of the King',
          count: 200
        },
        {
          id: 133,
          title: 'Primary',
          count: 200
        },
        {
          id: 144,
          title: 'Wings of Desire',
          count: 200
        }
      ]
    },
    {
      name: 'JPN',
      watched: [
        {
          id: 100,
          title: 'Lock, Stock and Two Smoking Barrels',
          count: 200
        },
        {
          id: 111,
          title: 'Scarface',
          count: 200
        },
        {
          id: 122,
          title: 'The Lord of the Rings: The Return of the King',
          count: 200
        },
        {
          id: 133,
          title: 'Primary',
          count: 200
        },
        {
          id: 144,
          title: 'Wings of Desire',
          count: 200
        }
      ]
    },
    {
      name: 'USA',
      watched: [
        {
          id: 100,
          title: 'Lock, Stock and Two Smoking Barrels',
          count: 200
        },
        {
          id: 111,
          title: 'Scarface',
          count: 200
        },
        {
          id: 122,
          title: 'The Lord of the Rings: The Return of the King',
          count: 200
        },
        {
          id: 133,
          title: 'Primary',
          count: 200
        },
        {
          id: 144,
          title: 'Wings of Desire',
          count: 200
        }
      ]
    }
  ]
}
