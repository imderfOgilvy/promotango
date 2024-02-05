import { HTMLAttributes, ReactNode } from 'react'

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  children: ReactNode
}

export function Select({ children, ...props }: SelectProps) {
  return (
    <select {...props} class='w-full rounded-xl p-1.5 outline-none'>
      {children}
    </select>
  )
}
