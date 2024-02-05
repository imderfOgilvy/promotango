import { useEffect, useState } from 'preact/hooks'
import { type ReactNode, createContext } from 'react'
import { navigate } from 'wouter/use-location'
import { PropsContextAuth } from './lib/types'

export const AuthContext = createContext<PropsContextAuth | undefined>(
  undefined,
)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token')

    if (storedToken) {
      setToken(storedToken)
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  )
}
