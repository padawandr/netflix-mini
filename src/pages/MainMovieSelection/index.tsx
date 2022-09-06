import { useEffect, useState } from 'react'
import { Hero } from '../../components/Hero'
import { Showcase } from '../../components/Showcase'
import { Spinner } from '../../components/Spinner'
import { useNetflix } from '../../contexts/NetflixProvider'
import { IShowcase } from '../../interfaces/movie.interface'
import { Wrapper } from './styles'

export function MainMovieSelection (): JSX.Element {
  const { loadShowcases } = useNetflix()

  const [showcases, setShowcases] = useState<IShowcase[]>([])
  const [heroShowcase, setHeroShowcase] = useState<IShowcase>(
    ({} as any) as IShowcase
  )
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    loadShowcases()
      .then(showcases => {
        setShowcases(showcases)
        setHeroShowcase(showcases[0])
      })
      .catch(error => setErrorMessage(error.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {loading && <Spinner />}
      {!loading && errorMessage && (
        <p>{`Could not load data. ${errorMessage}`}</p>
      )}
      {showcases.length && <Hero showcase={heroShowcase} />}
      <Wrapper>
        {showcases.map((showcase, key) => (
          <Showcase key={key} showcase={showcase} />
        ))}
      </Wrapper>
    </>
  )
}
