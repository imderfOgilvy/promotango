import { Link } from 'wouter'
import { Input, Label, MyModal } from '../components/ui'
import { Button, Checkbox } from '../components/utilities'
import ReCAPTCHA from 'react-google-recaptcha'
import { SITE_KEY_CAPTCHA, axiosInstance, provs } from '../lib/const'
import logoNestleSvgMobile from '/character-register.svg'
import logoNestlePngDesktop from '/logo-nestle-it.png'
import checkedCirclePng from '/checked-circle.png'
import noChecked from '/no-checked.png'
import { useEffect, useState } from 'preact/hooks'
import { AxiosError } from 'axios'
import { navigate } from 'wouter/use-location'
import { useModal } from '../lib/hooks'
import { IconEye, IconEyeClose } from '../components/icons'
import ReactGA from 'react-ga4'

export default function RegisterPage() {
  const [user, setUser] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    identification_card: '',
    city: '',
    phone_number: '',
  })
  const { isOpen, setIsOpen, handleTogglePasswordVisibility, showPassword } =
    useModal()
  const [validateUser, setValidateUser] = useState(false)
  const [message, setMessage] = useState({
    title: '',
    description: '',
    tag: 'msg_register_success',
    img: false,
    extra: '',
  })
  const regex = /^\d+$/ // -> Buscar numero
  const [isReCAPTCHA, setIsReCAPTCHA] = useState(false)

  const handleReCAPTCHA = () => {
    setIsReCAPTCHA(() => !isReCAPTCHA)
  }

  const handleGetInputValue = (key: string, value: string) => {
    if (key === 'identification_card' && !regex.test(value)) {
      setUser((prev) => ({ ...prev, ['identification_card']: '' }))
      return
    }
    
    if (key === 'phone_number' && !regex.test(value)) {
      setUser((prev) => ({ ...prev, ['phone_number']: '' }))
      return
    }
    setUser((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmitRegisterUser = async (e: Event) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    if (!isReCAPTCHA) return

    try {
      await axiosInstance.post('auth/register', {
        ...user,
      })
      setMessage({
        title: 'REGISTRO EXITOSO',
        description: '',
        tag: 'msg_register_success',
        img: false,
        extra: '',
      })
      setIsOpen(true)
      setValidateUser(true)
      localStorage.setItem('cc', JSON.stringify(user.identification_card))
    } catch (error) {
      const axiosError = error as AxiosError

      if (axiosError && axiosError.response?.status === 409) {
        setIsOpen(true)
        setMessage({
          title: 'REGISTRO NO EXITOSO',
          description: '',
          tag: 'msg_register_unsuccess',
          img: true,
          extra: '',
        })
        setValidateUser(false)
      }
    } finally {
      form.reset()
    }
  }

  const handleCloseModal = () => {
    setIsOpen(false)
    if (validateUser) {
      navigate('/login')
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
       <div id={message.tag} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
       }}>
       <img
          src={message.img ? noChecked : checkedCirclePng}
          alt='asdsa'
          class='w-8 h-8'
        />
        <h2 class='font-amsi-bold text-brown font-bold text-lg uppercase'>
          {message.title}
        </h2>
        <small class='font-amsi-normal text-brown text-lg'>
          {message.description}
        </small>
        <small class='font-amsi-bold text-brown font-bold text-sm'>
          {message.extra}
        </small>
       </div>
      </MyModal>
      <section class="min-h-screen bg-[url('/bg-it-mobile.png')] bg-no-repeat md:bg-[url('/background-login-desktop.png')] bg-cover grid place-content-center p-4 bg-center">
        <div class='lg:grid lg:grid-cols-2 bg-left place-items-center relative w-full px-8'>
          <aside class='lg:h-full gap-10'>
            <figure class='flex relative mt-12 -ml-12 -mb-28 justify-start lg:justify-center lg:items-center h-full lg:mb-0 lg:mt-4'>
              <img
                src={logoNestlePngDesktop}
                alt='Nestle registro para gamer'
                class='hidden lg:block object-contain w-96 relative -z-10 lg:z-10'
              />
              <img
                src={logoNestleSvgMobile}
                alt='Nestle registro para gamer'
                class='block lg:hidden'
              />
            </figure>
          </aside>
          <aside class='lg:h-full'>
            <h2 class='font-amsi-bold text-white text-2xl text-center lg:block hidden uppercase'>
              ¿Listo para ser un gamer distinto?
            </h2>
            <form
              id={'form-register'}
              class='lg:w-[30rem] lg:ml-4'
              className={'form-login'}
              onSubmit={handleSubmitRegisterUser}
            >
              <div class='bg-brown rounded-xl max-w-xl relative z-10 p-4'>
                <h2 class='font-amsi-bold text-c-coffe text-4xl block lg:hidden text-balance text-center uppercase'>
                  ¿Listo para ser un gamer distinto?
                </h2>

                <Label htmlFor='name' color='c-coffe'>
                  Nombre*
                </Label>
                <div class='my-1'>
                  <Input
                    type='text'
                    name='name'
                    onChange={(e) =>
                      handleGetInputValue('name', e.currentTarget.value)
                    }
                    value={user.name}
                  />
                </div>
                <Label htmlFor='lastname' color='c-coffe'>
                  Apellido*
                </Label>
                <div class='my-1'>
                  <Input
                    type='text'
                    name='lastname'
                    onChange={(e) =>
                      handleGetInputValue('lastname', e.currentTarget.value)
                    }
                    value={user.lastname}
                  />
                </div>
                <Label htmlFor='email' color='c-coffe'>
                  Correo Electrónico*
                </Label>
                <div class='my-1'>
                  <Input
                    type='email'
                    name='email'
                    onChange={(e) =>
                      handleGetInputValue('email', e.currentTarget.value)
                    }
                    value={user.email}
                  />
                </div>
                <Label htmlFor='password' color='c-coffe'>
                  CONTRASEÑA*
                </Label>
                <div class='my-1 relative'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    onChange={(e) =>
                      handleGetInputValue('password', e.currentTarget.value)
                    }
                    value={user.password}
                  />
                  <button
                    type='button'
                    className='absolute right-3 top-[1.1rem] transform -translate-y-1/2 cursor-pointer'
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? <IconEye /> : <IconEyeClose />}
                  </button>
                </div>
                <Label htmlFor='identification' color='c-coffe'>
                  Número de Cédula*
                </Label>
                <div class='my-1'>
                  <Input
                    type='text'
                    name='identification'
                    onChange={(e) =>
                      handleGetInputValue(
                        'identification_card',
                        e.currentTarget.value,
                      )
                    }
                    value={user.identification_card}
                    maxLength={10}
                  />
                </div>
                <Label htmlFor='phone_number' color='c-coffe'>
                  NÚMERO DE TELÉFONO*
                </Label>
                <div class='my-1'>
                  <Input
                    type='text'
                    name='phone_number'
                    onChange={(e) =>
                      handleGetInputValue('phone_number', e.currentTarget.value)
                    }
                    value={user.phone_number}
                  />
                </div>
                <Label htmlFor='city' color='c-coffe'>
                  CIUDAD*
                </Label>
                <div class='my-2'>
                  <select
                    class='p-1.5 rounded-2xl outline-none border-none w-full'
                    onChange={(e) =>
                      handleGetInputValue('city', e.currentTarget.value)
                    }
                    required
                  >
                    <option value='' selected></option>
                    {provs.map((p) => (
                      <option value={p.name} key={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Checkbox />

              <div class='flex justify-center items-center mt-4'>
                <ReCAPTCHA
                  sitekey={SITE_KEY_CAPTCHA}
                  onChange={handleReCAPTCHA}
                />
              </div>
              <div className={'click_registrarse'}>
                <Button id={'click_registrarse'} type='submit'>REGISTRARSE</Button>
              </div>
              <small class='font-amsi-normal block text-center text-white mt-4 mb-1 uppercase'>
                ¿Ya tienes una cuenta?
              </small>
              <div class='flex justify-center'>
                <button
                  id={'btn_login'}
                  type='button'
                  class='bg-brown text-white rounded-xl font-bold text-lg text-center w-[15rem] p-2 hover:opacity-95'
                >
                  <Link to='/login'>INICIAR SESIÓN </Link>
                </button>
              </div>
            </form>
          </aside>
        </div>
      </section>
    </>
  )
}
