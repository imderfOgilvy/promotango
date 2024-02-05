import type { StateUpdater } from 'preact/hooks'
import { ReactNode } from 'react'

export type Lot = {
  _id: number
  number_lot: string
  product_name: string
  store_name?: string
  image_url?: string | File
  sequence_id: number
  name_user?: string
  creation_date?: Date | string
  email_user?: string
}

export type LotWithoutSequence = {
  number_lot: string
  product_name: string
  store_name?: string
  image_url?: string
  name_user: string
}

export type ResponsePython = {
  detail: { db: []; message: string; user: string }
}

export type PropsContextAuth = {
  token: string | null
}
export interface PropsContextAuthAdmin extends PropsContextAuth {
  role: string | null
}

export type PropsContextModal = {
  isOpen: boolean
  setIsOpen: StateUpdater<boolean>
  showPassword: boolean
  setShowPassword: StateUpdater<boolean>
  handleTogglePasswordVisibility: () => void
}

export type User = {
  _id: string
  name: string
  lastname: string
  email: string
  password: string
  identification_card: string
  city: string
  role: string
  creation_date: Date | string
  phone_number: string | number
}

export type UserWithoutPassword = {
  name: string
  lastname: string
  email: string
  identification_card: string
  city: string
  creation_date: Date | string
}

export type ChildrenComponent = { children: ReactNode }
