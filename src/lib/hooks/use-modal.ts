import { useContext } from 'preact/hooks'
import { ModalContext } from '../../modal-context'
import { PropsContextModal } from '../types'

export const useModal = (): PropsContextModal => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
