// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Disclosure } from '@headlessui/react'
import { ChevronLeft, ChevronDown } from '../icons'
import type { ReactNode } from 'react'

type PropsDisclosure = {
  children: ReactNode
  title: string
}
export function MyDisclosure({ children, title }: PropsDisclosure) {
  return (
    <div className='w-full px-4 pt-2'>
      <div className='mx-auto w-full max-w-md rounded-2xl p-1'>
        <Disclosure as='div'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between border-b border-b-c-coffe p-2'>
                <span class='text-white font-amsi-bold text-base text-start'>
                  {title}
                </span>
                <span class='text-base'>
                  {open ? <ChevronDown /> : <ChevronLeft />}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className='px-1 pb-2 pt-4 text-[8px] text-white font-amsi-regular'>
                {children}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
