import { type ReactNode, createContext, useState } from 'react'
import type { PropsContextModal } from './lib/types'

export const ModalContext = createContext<PropsContextModal | undefined>(
  undefined,
)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword)
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        showPassword,
        setShowPassword,
        handleTogglePasswordVisibility,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
