import type { HTMLAttributes, ReactNode } from 'react'

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  color?: string
}
export function Label({ children, color = 'white', ...props }: LabelProps) {
  return (
    <label
      {...props}
      class={`text-${color} font-bold font-amsi-normal uppercase`}
    >
      {children}
    </label>
  )
}
