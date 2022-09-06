import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthProvider'
import { useStorage } from '../../contexts/StorageProvider'
import { Wrapper } from './styles'

export function Login (): JSX.Element {
  const navigate = useNavigate()

  const { signIn } = useAuth()
  const { saveInitialData } = useStorage()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit (event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    if (email && password) {
      const logged = signIn(email, password)
      if (logged) {
        saveInitialData()
        navigate('/')
      } else {
        setError(true)
      }
    }
  }

  return (
    <Wrapper>
      <h1 className='title'>Sign In</h1>
      <form className='form' onSubmit={event => handleSubmit(event)}>
        <input
          type='text'
          className='input'
          value={email}
          placeholder='Email'
          onChange={event => setEmail(event.target.value.trim())}
        />
        <input
          type='password'
          className='input'
          value={password}
          placeholder='Password'
          onChange={event => setPassword(event.target.value)}
        />
        <button className='submit' type='submit'>
          Sign In
        </button>
        {error && <span className='error'>Invalid Email / Password</span>}
      </form>
    </Wrapper>
  )
}
