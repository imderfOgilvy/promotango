import ReCAPTCHA from 'react-google-recaptcha'
import { Label, Input, MyModal } from '../components/ui'
import { SITE_KEY_CAPTCHA, axiosInstance } from '../lib/const'
import { Button, Checkbox } from '../components/utilities/'
import { Link } from 'wouter'
import { navigate } from 'wouter/use-location'
import type { AxiosError } from 'axios'
import { useEffect, useState } from 'preact/hooks'
import checkedCirclePng from '/no-checked.png'
import logoNestleSvg from '/character-login.svg'
import { useModal } from '../lib/hooks'
import wanrPng from '/warn.png'
import errorPng from '/no-checked.png'
import { IconEye, IconEyeClose } from '@/components/icons'
import ReactGA from 'react-ga4'
import TagManager from 'react-gtm-module'
import { PasswordDialog } from '@/components/ui/password-dialog'

export default function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [isMessage, setIsMessage] = useState({
    type: '',
    message: '',
    extra: '',
  })

  const [isOpenDailog, setIsOpenDialog] = useState(false)
  const [emailUser, setEmailUser] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [isReCAPTCHA, setIsReCAPTCHA] = useState(false)
  const { isOpen, setIsOpen, showPassword, handleTogglePasswordVisibility } =
    useModal()

  const handleReCAPTCHA = () => {
    setIsReCAPTCHA(() => !isReCAPTCHA)
  }

  const sendGTM = () => {
    // Envía el evento de clic al dataLayer de GTM
    // Push an event to the data layer
    TagManager.dataLayer({
      dataLayer: {
        event: 'buttonClick', // Event name
        buttonName: 'REGISTRARME', // Additional data
      },
    })

    // Adicionalmente, puedes ejecutar cualquier otra lógica que necesites al hacer clic en el botón
  }

  const handleGetInputValue = (key: string, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value }))
  }

  const handleLoginUser = async (e: Event) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    if (!user.email || !user.password) return

    try {
      const res = await axiosInstance.post('auth/login', {
        ...user,
      })

      const token = res.data.access_token as string

      sessionStorage.setItem('token', JSON.stringify(token))
      sessionStorage.setItem(
        'name-user',
        JSON.stringify(res.data.name as string),
      )

      navigate('/')
    } catch (error) {
      const axiosError = error as AxiosError
      const dataError = axiosError.response?.data as {
        detail: { message: string }
      }

      if (
        axiosError &&
        axiosError.response?.status === 401 &&
        dataError.detail.message === 'password'
      ) {
        setIsMessage(() => ({
          type: 'password',
          message: 'Contraseña errada',
          extra: '',
        }))
        setIsOpen(true)
      }
      if (
        axiosError &&
        axiosError.response?.status === 401 &&
        dataError.detail.message === 'Credentials invalid'
      ) {
        setIsMessage(() => ({
          type: 'email',
          message: 'ESTE USUARIO NO EXISTE',
          extra: '',
        }))
        setIsOpen(true)
      }
    } finally {
      form.reset()
      setUser(() => ({ email: '', password: '' }))
    }
  }
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleUpdatePassword = async (e: Event) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    if (!emailUser || !newPassword) return

    try {
      await axiosInstance.patch(`auth/update/${emailUser}`, {
        new_password: newPassword,
      })

      setIsMessage(() => ({
        type: 'success',
        message: 'CONTRASEÑA ACTULIZADA',
        extra: '',
      }))

    } catch (error) {
      const axiosError = error as AxiosError
      
      if (axiosError && axiosError.response?.status === 404) {
        setIsMessage(() => ({
          type: 'email',
          message: 'ESTE USUARIO NO EXISTE',
          extra: '',
        }))
        setIsOpen(true)
      }
    } finally {
      form.reset()
      setIsOpenDialog(false)
    }
  }


  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Ganadores Tango',
    })
  }, [])
  return (
    <>
      <MyModal closeModal={handleCloseModal} isOpen={isOpen} gap={false}>
        <img
          src={
            isMessage.type === 'password'
              ? wanrPng
              : isMessage.type === 'error'
                ? errorPng
                : checkedCirclePng
          }
          alt='Imagen del mensaje'
          className='w-8 h-8'
        />
        <h2 class='font-amsi-bold text-brown font-bold text-xl uppercase pt-3 text-balance'>
          {isMessage.message}
        </h2>
        <small class='font-amsi-bold text-brown font-bold text-lg'>
          {isMessage.extra}
        </small>
      </MyModal>
      <section class="min-h-screen bg-[url('/background-login.png')] bg-no-repeat md:bg-[url('/background-login-desktop.png')] bg-cover bg-center grid place-content-center">
        <img
          src={logoNestleSvg}
          alt='nestle logo gamer'
          class='object-contain w-[350px]'
        />
        <form id={'form-login'} onSubmit={handleLoginUser} class='h-max p-1' className={'form-login'} role='form'>
          <Label htmlFor='email'>Correo Electrónico*</Label>
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
          <div class='mt-2 flex gap-x-3'>
            <Checkbox />
          </div>
          <div class='flex justify-center items-center mt-4'>
            <ReCAPTCHA sitekey={SITE_KEY_CAPTCHA} onChange={handleReCAPTCHA} />
          </div>
          <div className={'click_ingresar'}>
            <Button id={'click_ingresar'} type='submit'>INGRESAR</Button>
          </div>
          <small
            class='text-sm font-amsi-normal block text-center text-white mt-4 mb-1 cursor-pointer'
            onClick={() => setIsOpenDialog(true)}
          >
            ¿Olvidaste la Contraseña?
          </small>
          <small class='font-amsi-normal block text-center text-white mt-8 mb-1 uppercase'>
            ¿Aún no tienes una cuenta?
          </small>
          <div class='flex justify-center'>
            <button
              onClick={sendGTM}
              id={'click_register'}
              type='button'
              class='bg-brown text-white rounded-xl font-bold text-lg text-center w-[15rem] p-2 hover:opacity-95'
            >
              <Link to='/register'>REGISTRARME</Link>
            </button>
          </div>
        </form>
      </section>
      <PasswordDialog
        isOpenDialog={isOpenDailog}
        closeModal={() => setIsOpenDialog(false)}
        setEmailUser={setEmailUser}
        setNewPassword={setNewPassword}
        handleUpdatePassword={handleUpdatePassword}
      />
    </>
  )
}
