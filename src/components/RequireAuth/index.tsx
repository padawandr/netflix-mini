import { useAuth } from '../../contexts/AuthProvider'
import { Login } from '../../pages/Login'

interface Props {
  children: JSX.Element
}

export function RequireAuth ({ children }: Props): JSX.Element {
  const { user } = useAuth()

  if (!user) {
    return <Login />
  }

  return children
}
