import type { HTMLAttributes } from 'react'

type InputProps = HTMLAttributes<HTMLInputElement>

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      class='block w-full text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 rounded-2xl outline-none border-none p-1.5 shadow-md'
      required
    />
  )
}
