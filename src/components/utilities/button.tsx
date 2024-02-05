import type { HTMLAttributes } from 'react'

type PropsButton = HTMLAttributes<HTMLButtonElement>

export function Button({ children, type, ...props }: PropsButton) {
  return (
    <button
      type={type}
      {...props}
      class='bg-red-600 font-amsi-bold text-white rounded-xl font-bold text-lg text-center w-full mt-10 py-1 hover:opacity-95'
    >
      {children}
    </button>
  )
}
