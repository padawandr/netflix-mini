import { createContext, useContext, useEffect, useState } from 'react'
import { IUser } from '../interfaces/user.interface'
import { findUserById, login } from '../services/auth'
import { getNumberData, removeData, setData } from '../services/storage'

interface ContextType {
  user: IUser | null
  signIn: (email: string, password: string) => boolean
  signOut: () => void
}

interface ProviderProps {
  children: JSX.Element
}

const AuthContext = createContext<ContextType>({
  user: null,
  signIn: () => false,
  signOut: () => {}
})

export function AuthProvider ({ children }: ProviderProps): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    if (!user) {
      const userId = getNumberData('userId')
      const foundUser = findUserById(userId)
      if (foundUser) {
        setUser(foundUser)
      }
    }
  }, [])

  function signIn (email: string, password: string): boolean {
    const foundUser = login(email, password)
    if (foundUser) {
      setData('userId', foundUser.id)
      setUser(foundUser)
      return true
    }
    return false
  }

  function signOut (): void {
    removeData('userId')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth (): ContextType {
  return useContext(AuthContext)
}
