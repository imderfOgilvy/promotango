import { useContext } from 'preact/hooks'
import { AuthContext } from '../../auth-context'
import { PropsContextAuth } from '../types'

export const useAuth = (): PropsContextAuth => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
