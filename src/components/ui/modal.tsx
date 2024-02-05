// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import imageModal from '/new-pop-up.png'

export function MyModal({ children, closeModal, isOpen, gap }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-brown opacity-98' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle transition-all bg-transparent relative'>
                  <figure
                    className='relative cursor-pointer'
                    onClick={closeModal}
                  >
                    <img src={imageModal} alt='example' />
                    <div
                      className={`absolute top-[77%] left-2/4 transform -translate-x-1/2 -translate-y-[53%] text-center z-10 w-26 flex flex-col items-center justify-center -mt[0.3rem] ${
                        gap ? ' gap-y-2' : ''
                      }`}
                    >
                      {children}
                    </div>
                  </figure>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
