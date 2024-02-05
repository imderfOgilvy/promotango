import { Button } from '../../components/utilities'
import { Input, Label, MyModal } from '../../components/ui'
import { useState } from 'preact/hooks'
import { useModal } from '../../lib/hooks'
import { IconEye, IconEyeClose } from '../../components/icons'
import logoNestleSvg from '/logo.png'
import ReCAPTCHA from 'react-google-recaptcha'
import { SITE_KEY_CAPTCHA, axiosInstance } from '../../lib/const'
import { navigate } from 'wouter/use-location'
import type { AxiosError } from 'axios'
import errorPng from '/no-checked.png'

// imderf.rios@ogilvy.com
export function AdminPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [isReCAPTCHA, setIsReCAPTCHA] = useState(false)
  const [isMessage, setIsMessage] = useState({
    type: '',
    message: '',
    extra: '',
  })
  const { isOpen, setIsOpen, showPassword, handleTogglePasswordVisibility } =
    useModal()

  const handleLoginAdmin = async (e: Event) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    if (!user.email || !user.password) return
    try {
      const res = await axiosInstance.post('auth/login', {
        ...user,
      })

      const token = res.data.access_token as string
      const role = res.data.role as string
      const username = res.data.name as string

      if (role === 'admin') {
        sessionStorage.setItem('token-admin', JSON.stringify(token))
        sessionStorage.setItem('role-admin', JSON.stringify(role))
        sessionStorage.setItem('admin-name', JSON.stringify(username))

        navigate('/admin/home')
        return
      }
      setIsMessage(() => ({
        type: 'email',
        message: 'ESTE USUARIO NO ES ADMINISTRADOR',
        extra: '',
      }))
      setIsOpen(true)
    } catch (error) {
      const axiosError = error as AxiosError
      const dataError = axiosError.response?.data as {
        detail: { message: string }
      }
      console.log(dataError)
    } finally {
      form.reset()
    }
  }

  const handleReCAPTCHA = () => {
    setIsReCAPTCHA(() => !isReCAPTCHA)
  }

  const handleGetInputValue = (key: string, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value }))
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <MyModal closeModal={handleCloseModal} isOpen={isOpen} gap={false}>
        <img src={errorPng} alt='Imagen del mensaje' className='w-8 h-8' />
        <h2 class='font-amsi-bold text-brown font-bold text-xl uppercase pt-3 text-balance'>
          {isMessage.message}
        </h2>
      </MyModal>
      <section class="min-h-screen bg-[url('/background-login.png')] bg-no-repeat md:bg-[url('/background-login-desktop.png')] bg-cover bg-center grid place-content-center">
        <img
          src={logoNestleSvg}
          alt='nestle logo gamer'
          class='object-contain w-[350px]'
        />
        <h2 class='font-amsi-regular font-bold text-center text-4xl text-white py-4 tracking-wider'>
          ADMINISTRADOR
        </h2>
        <form id={'form-admin-login'} onSubmit={handleLoginAdmin} class='h-max p-1' role='form'>
          <Label htmlFor='email'>Usuario*</Label>
          <div class='my-2'>
            <Input
              type='email'
              value={user.email}
              name='email'
              onChange={(e) =>
                handleGetInputValue('email', e.currentTarget.value)
              }
            />
          </div>

          <Label htmlFor='password'>Contraseña*</Label>
          <div class='my-2 relative'>
            <Input
              type={showPassword ? 'text' : 'password'}
              value={user.password}
              name='password'
              onChange={(e) =>
                handleGetInputValue('password', e.currentTarget.value)
              }
            />
            <button
              type='button'
              className='absolute right-3 top-[1.1rem] transform -translate-y-1/2 cursor-pointer'
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? <IconEye /> : <IconEyeClose />}
            </button>
          </div>
          <div class='flex justify-center items-center mt-4'>
            <ReCAPTCHA sitekey={SITE_KEY_CAPTCHA} onChange={handleReCAPTCHA} />
          </div>
          <div className={'click_admin_ingresar'}>
            <Button id={'click_admin_ingresar'} type='submit'>INGRESAR</Button>
          </div>
        </form>
      </section>
    </>
  )
}
