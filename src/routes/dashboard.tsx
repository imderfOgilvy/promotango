import { useEffect, useRef, useState } from 'preact/hooks'
import supabase from '../lib/supabase'
import { v4 as uuidv4 } from 'uuid'
import { Input, Label, MyModal, Select } from '../components/ui'
import { Button, Checkbox } from '../components/utilities'
import iconCamera from '/icon-camera.png'
import { axiosInstance, markets, productsPage } from '../lib/const'
import Navbar from '../components/navbar'
import Loading from '../components/loading'
import Packing from '../components/packing'
import Footer from '../components/footer'
import { CheckedImage } from '../components/icons'
import type { Lot, ResponsePython } from '../lib/types'
import checkedCirclePng from '/checked-circle.png'
import Layout from '../layouts/Layout'
import { type AxiosError } from 'axios'
import { navigate } from 'wouter/use-location'
import wanrPng from '/warn.png'
import errorPng from '/no-checked.png'
import { useModal } from '../lib/hooks'
import { removeAccentMark } from '@/lib/utils'
import ReactGA from 'react-ga4'

export default function DashboardPage() {
  const inputFile = useRef<HTMLInputElement | null>(null)
  const [isUploadImage, setIsUploadImage] = useState(false)
  const [pack, setPack] = useState({} as Lot)
  const [message, setMessage] = useState({
    title: '',
    description: '',
    img: '',
    extra: '',
    gap: false,
    tag: '',
  })
  const [packages, setPackages] = useState<Lot[]>([])
  const { isOpen, setIsOpen } = useModal()
  const [loading, setLoading] = useState(false)

  const getLots = async (token: string) => {
    try {
      const res = await axiosInstance.get('/lots/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const { detail } = res.data as ResponsePython
      setPackages(detail.db)
    } catch (error) {
      const errAxios = error as AxiosError
      if (errAxios.response && errAxios.response.status === 404) {
        const { detail } = errAxios.response.data as ResponsePython
        setPackages(detail.db)
      }
      if (errAxios.response && errAxios.response.status === 401) {
        navigate('/login')
      }
    }
  }

  const handleUploadImage = () => {
    if (inputFile.current) {
      inputFile.current.click()
      setIsUploadImage(false)

      if (inputFile.current) {
        inputFile.current.value = ''
      }
    }
  }

  const handleImageChange = (e: Event) => {
    const inputFile = e.target as HTMLInputElement
    const filesInput = inputFile.files ?? []

    if (filesInput.length > 0) {
      setPack({ ...pack, image_url: filesInput[0] })
      setIsUploadImage(true)
    }
  }

  const handleGetValuePack = (key: string, value: string) => {
    setPack({ ...pack, [key]: value })
  }

  const handleSavePackaging = async (e: Event) => {
    e.preventDefault()
    const nameUser = JSON.parse(sessionStorage.getItem('name-user') || '{}')

    const form = e.target as HTMLFormElement
    const token = JSON.parse(sessionStorage.getItem('token') ?? '{}')

    if (!pack) return
    if (!nameUser) return
    if (pack.store_name === '' || pack.product_name === '') return
    if (!pack.image_url) return alert('Selecciona una imagen')

    try {
      setLoading(true)
      const currentPackages = [...packages]
      const res = await axiosInstance.get('/wins/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = (await res.data) as {
        name_product: string
        number_lote: string | number
      }[]

      const isLoteExistInData = data.some(
        (item) =>
          item.number_lote.toString().toLowerCase() ===
          pack.number_lot.toString().toLowerCase(),
      )

      if (!isLoteExistInData) {
        setMessage({
          title: 'CARGA NO EXITOSA',
          tag: 'msg_success',
          description: '',
          img: 'error',
          extra: '',
          gap: false,
        })
        setIsOpen(true)
        return
      }

      const matchingLot = data.find(
        (item) =>
          item.number_lote.toString().toLowerCase() ===
            pack.number_lot.toString().toLowerCase() &&
          item.name_product.toLowerCase() === pack.product_name.toLowerCase(),
      )

      if (!matchingLot) {
        setMessage({
          title: 'CARGA NO EXITOSA',
          tag: 'msg_unsuccess',
          description: '',
          img: 'error',
          extra: '',
          gap: false,
        })
        setIsOpen(true)
        return
      }
      const cc = JSON.parse(localStorage.getItem('cc') || '0')

      const uploadFile = await supabase.storage
        .from('public-nestle')
        .upload(
          `folder/product_${removeAccentMark(
            pack.product_name.split(' ').join('_'),
          )}_${removeAccentMark(
            (nameUser as string).split('').join(''),
          )}_${pack.number_lot}_${cc}_${uuidv4()}.png`,
          pack.image_url,
          {
            upsert: false,
          },
        )
      console.log(uploadFile)

      if (uploadFile.error) {
        setMessage({
          title: 'CARGA NO EXITOSA',
          description: 'error a subir tu imagen',
          img: 'error',
          extra: '',
          gap: false,
          tag: 'msg_unsuccess',
        })
        return
      }
      const URL = supabase.storage
        .from('public-nestle')
        .getPublicUrl(uploadFile.data.path)

      if (token) {
        currentPackages.push(pack)
        setPackages(currentPackages)
        await axiosInstance.post(
          '/lots/create',
          { ...pack, image_url: URL.data.publicUrl },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        setMessage({
          title: 'CARGA EXITOSA',
          description: '',
          img: 'success',
          extra: '',
          gap: false,
          tag: 'msg_success',
        })
        setIsUploadImage(false)
        setIsOpen(true)
      }
    } catch (error) {
      const errAxios = error as AxiosError
      if (errAxios.response && errAxios.response.status === 401) {
        setMessage({
          title: 'CARGA NO EXITOSA',
          description: '',
          img: 'error',
          extra: '',
          gap: false,
          tag: 'msg_unsuccess',
        })
        setIsOpen(true)
      }

      if (errAxios.response && errAxios.response.status === 429) {
        setMessage({
          title:
            'SUPERASTE EL LIMITE <span class="text-red-500">DIARIO DE CARGA</span>',
          description: '',
          img: 'warn',
          extra: '',
          tag: 'msg_exceed_limit',
          gap: true,
        })
        setIsOpen(true)
      }
    } finally {
      setLoading(false)
      form.reset()
      getLots(token)
    }
  }

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem('token') ?? '{}')

    if (token) {
      getLots(token)
    }
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Dashboard Tango',
    })
    
    return () => {}
  }, [])

  return (
    <>
      <MyModal
        closeModal={() => setIsOpen(() => !isOpen)}
        isOpen={isOpen}
        gap={message.gap}>
        <div id={message.tag} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src={
              message.img === 'warn'
                ? wanrPng
                : message.img === 'error'
                  ? errorPng
                  : checkedCirclePng
            }
            alt='Imagen del mensaje'
            className='w-8 h-8'
          />
          <h2
            class='font-amsi-bold text-brown font-bold text-xl'
            dangerouslySetInnerHTML={{ __html: message.title }}
          ></h2>
          <small class='font-amsi-normal text-brown text-lg -mt-[0.3rem]'>
            {message.description}
          </small>
          <small class='font-amsi-bold text-brown font-bold text-lg'>
            {message.extra}
          </small>
        </div>
      </MyModal>
      <Layout>
        {loading && <Loading m='33rem' />}
        <Navbar />
        <div class='grid place-items-center'>
          <div>
            <div class='mt-16 p-3'>
              <h2 class='font-amsi-bold text-white text-3xl text-center my-4'>
                ¡AVISTAMIENTO DE RUSHER!
              </h2>
              <form action='#' class='' className={'formulario_tango_productos'} onSubmit={handleSavePackaging}>
                <div class='bg-brown p-5 rounded-xl mb-8'>
                  <div class='mb-2'>
                    <Label htmlFor='product'>
                      ¿Qué producto de TANGO® compraste?
                    </Label>
                    <Select
                      placeholder='Escribir nombre del producto'
                      onChange={(e) =>
                        handleGetValuePack(
                          'product_name',
                          e.currentTarget.value,
                        )
                      }
                    >
                      <option selected value=''>
                        Selecciona nombre del producto
                      </option>
                      {productsPage.map((product, i) => (
                        <option key={i} value={product.value}>
                          {product.label}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div class='mb-2'>
                    <Label>NÚMERO DE LOTE*</Label>
                    <Input
                      type='text'
                      placeholder='Escribir numero de lote'
                      onChange={(e) =>
                        handleGetValuePack('number_lot', e.currentTarget.value)
                      }
                    />
                  </div>

                  <div class='mb-2'>
                    <Label htmlFor='buy'>¿Dónde compraste tu producto?</Label>
                    <Select
                      placeholder='Tienda de compra'
                      onChange={(e) =>
                        handleGetValuePack('store_name', e.currentTarget.value)
                      }
                    >
                      <option selected value=''>
                        Selecciona la tienda de compra
                      </option>
                      {markets.map((market, i) => (
                        <option key={i} value={market.label}>
                          {market.label}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <button
                    type='button'
                    class={`border border-dashed border-c-brown p-4 mt-4 rounded-xl cursor-pointer block w-full ${
                      isUploadImage ? 'border-green-600' : 'border-c-coffe'
                    }`}
                    onClick={handleUploadImage}
                  >
                    {isUploadImage ? (
                      <h2 class='text-2xl font-amsi-bold text-c-brown text-center'>
                        Foto subida correctamente
                      </h2>
                    ) : (
                      <h3 class='text-2xl font-amsi-bold text-c-brown text-center uppercase'>
                        <span class='block lg:inline-block lg:pr-1.5'>
                          Sube la foto de tu producto TANGO®
                        </span>
                        <b class='text-red-500'>y número de lote</b>
                      </h3>
                    )}

                    <figure class='flex justify-center items-center py-1'>
                      {isUploadImage ? (
                        <CheckedImage />
                      ) : (
                        <img
                          src={iconCamera}
                          alt='subir foto tango'
                          class='w-16'
                        />
                      )}
                    </figure>
                    <input
                      ref={inputFile}
                      type='file'
                      class='hidden'
                      onChange={handleImageChange}
                      required
                    />
                  </button>
                  <Button type='submit' id={'click_send'}>ENVIAR</Button>
                </div>
                <div class='px-2 mb-4 text-center'>
                  <Checkbox />
                </div>
              </form>
            </div>
            <div class='mt-4'>
              {packages.length > 0 && (
                <div class='py-1 mt-2 px-2'>
                  <h2 class='text-3xl font-amsi-bold text-white text-center'>
                    CADA EMPAQUE ES UNA OPORTUNIDAD
                  </h2>
                  <div class='container h-[21.3rem] overflow-y-auto mx-auto px-4'>
                    {packages.map((l) => (
                      <Packing
                        number_lot={l.number_lot}
                        product_name={l.product_name}
                        key={l._id}
                        _id={l._id}
                        sequence_id={l.sequence_id}
                        image_url={l.image_url}
                        store_name={l.store_name}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  )
}
