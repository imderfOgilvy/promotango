// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useModal } from '@/lib/hooks'
import { IconEye, IconEyeClose } from '../icons'

export function PasswordDialog({
  closeModal,
  isOpenDialog,
  handleUpdatePassword,
  setNewPassword,
  setEmailUser,
}) {
  const { showPassword, handleTogglePasswordVisibility } = useModal()

  return (
    <>
      <Transition appear show={isOpenDialog} as={Fragment}>
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
            <div className='fixed inset-0 bg-black/25' />
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
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle transition-all bg-transparent relative bg-white'>
                  <form
                    class='flex flex-col justify-center items-center'
                    onSubmit={handleUpdatePassword}
                  >
                    <h2 class='text-center text-xl font-bold py-5'>
                      ¿Deseas recuperar tu contraseña?
                    </h2>
                    <input
                      type='email'
                      placeholder='Escribe tu correo'
                      class='outline-none border border-gray-300 p-1 rounded w-full'
                      required
                      onChange={(e) => setEmailUser(e.currentTarget.value)}
                    />
                    <div class='my-2 relative w-full'>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        class='outline-none border border-gray-300 p-1 rounded w-full'
                        placeholder='Escribe tu nueva contraseña'
                        required
                        onChange={(e) => setNewPassword(e.currentTarget.value)}
                      />
                      <button
                        type='button'
                        className='absolute right-3 top-[1.1rem] transform -translate-y-1/2 cursor-pointer'
                        onClick={handleTogglePasswordVisibility}
                        required
                      >
                        {showPassword ? <IconEye /> : <IconEyeClose />}
                      </button>
                    </div>
                    <button
                      type='submit'
                      class='bg-green-500 text-white p-1 rounded my-4 px-3'
                    >
                      Cambiar contraseña
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
