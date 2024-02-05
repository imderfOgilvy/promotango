import * as XLSX from 'xlsx'
import { useEffect, useState } from 'preact/hooks'
import { NavbarAdmin } from '../../components/admin'
import userDownloadSvg from '/svg/user-admin.svg'
import userDownloadNotCardSvg from '/svg/user-admin-not-card.svg'
import iconAdmin from '/icon-admin.png'
import visualNestle from '/Visual.png'
import { navigate } from 'wouter/use-location'
import { axiosInstance } from '../../lib/const'
import type { Lot, ResponsePython, User } from '../../lib/types'
import type { AxiosError } from 'axios'
import Loading from '../../components/loading'
import ProgressBar from '../../components/admin/progress'
import axios from 'axios'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

type ExcelTable = {
  name: string
  lastname: string
  email: string
  identification_card: string
  city: string
  lote: string
  store: string
  product: string
  image: string
  date: string | Date | undefined
  phone: string | number
}

export function HomeAdminPage() {
  const [loading, setLoading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)

  const zip = new JSZip()

  const handleLogOut = () => {
    sessionStorage.clear()
    navigate('/admin')
  }

  const arrayToExcel = (data: ExcelTable[], filename: string) => {
    const flatData = data.map((user) => ({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      identification_card: user.identification_card,
      city: user.city,
      lote: user.lote,
      store: user.store,
      product: user.product,
      date: user.date,
      image: user.image,
      phone: user.phone,
    }))

    const ws = XLSX.utils.json_to_sheet(flatData)
    const wb = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1')
    XLSX.writeFile(wb, filename)
  }

  const handleDownLoadUsers = async () => {
    const token = JSON.parse(sessionStorage.getItem('token-admin') ?? '{}')

    try {
      setLoading(true)

      const { data } = await axiosInstance.get('/auth/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const { data: lots } = await axiosInstance.get('/lots/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const dt = data as ResponsePython
      const db: User[] = dt.detail.db
      const dtLots = lots as ResponsePython
      const dbLots: Lot[] = dtLots.detail.db

      const userLotsMap: { [email: string]: Lot[] } = {}
      const usersWithoutLots = db.filter(
        (user) => !dbLots.some((lot) => lot.email_user === user.email),
      )

      const usersWithoutLotsData: ExcelTable[] = usersWithoutLots.map(
        (user) => ({
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          identification_card: user.identification_card,
          city: user.city || 'No especificó ciudad',
          lote:  'Sin Lotes',
          store: 'Sin tiendas',
          product: 'Sin productos',
          image: 'Sin imágenes',
          date: 'Sin fecha de creación',
          phone: user.phone_number || 'Sin número',
        }),
      )
      dbLots.forEach((lot) => {
        if (
          lot.email_user &&
          db.find((user) => user.email === lot.email_user)
        ) {
          if (!userLotsMap[lot.email_user]) {
            userLotsMap[lot.email_user] = []
          }
          userLotsMap[lot.email_user].push(lot)
        }
      })

      const usersWithLotsData: ExcelTable[] = db.flatMap((user) => {
        const userLots = userLotsMap[user.email] || []

        return userLots.map((lot) => {
          const dateObject = new Date(lot.creation_date!)
          const day = dateObject.getDate().toString().padStart(2, '0')
          const month = (dateObject.getMonth() + 1).toString().padStart(2, '0')
          const year = dateObject.getFullYear()
          const hours = dateObject.getHours()
          const minutes = dateObject.getMinutes().toString().padStart(2, '0')
          const seconds = dateObject.getSeconds().toString().padStart(2, '0')

          const ampm = hours >= 12 ? 'PM' : 'AM'
          const formattedHours = (hours % 12 || 12).toString().padStart(2, '0')

          const formattedDate = `${day}/${month}/${year} ${formattedHours}:${minutes}:${seconds} ${ampm}`

          return {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            identification_card: user.identification_card,
            city: user.city,
            lote: lot.number_lot || 'Sin Lote',
            store: lot.store_name || 'Sin tienda',
            product: lot.product_name || 'Sin producto',
            image:
              (lot.image_url as string).split('/').pop()! || 'Sin imagenes',
            date: formattedDate,
            phone: user.phone_number || 'Sin numero',
          }
        })
      })

      const allUsersData = [...usersWithLotsData, ...usersWithoutLotsData]

      arrayToExcel(allUsersData, 'usuarios_tango.xlsx')
    } catch (error) {
      const err = error as AxiosError

      if (err.response?.status === 401) {
        alert('No tienes autorización')
        setLoading(false)
      }
    } finally {
      setLoading(false)
    }
  }

  const CHUNK_SIZE = 1024 * 1024

  const download = async (lot: Lot) => {
    const imageUrl = lot.image_url

    try {
      if (
        imageUrl &&
        typeof imageUrl === 'string' &&
        imageUrl.startsWith('https')
      ) {
        const imageName = imageUrl.split('/').pop()
        const response = await axios.get(imageUrl, { responseType: 'blob' })

        const totalChunks = Math.ceil(response.data.size / CHUNK_SIZE)
        for (let i = 0; i < totalChunks; i++) {
          const start = i * CHUNK_SIZE
          const end = Math.min((i + 1) * CHUNK_SIZE, response.data.size)

          const chunkBlob = response.data.slice(start, end)
          zip.file(`${imageName}_${i}.png`, chunkBlob)
        }
      } else if (imageUrl && typeof imageUrl === 'string') {
        zip.file(`${imageUrl}.txt`, imageUrl)
      }
    } catch (error) {
      console.error(
        `Error descargando la imagen para el lote ${lot._id}: ${
          (error as Error).message
        }`,
      )
    }
  }

  const handleDownloadLots = async () => {
    const token = JSON.parse(sessionStorage.getItem('token-admin') ?? '{}')

    try {
      setLoading(true)
      setDownloadProgress(0)

      const { data } = await axiosInstance.get('/lots/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const dt = data as ResponsePython
      const db: Lot[] = dt.detail.db // 7GB
      const totalLots = db.length

      for (let i = 0; i < totalLots; i++) {
        await download(db[i])
        setDownloadProgress(Math.round(((i + 1) / totalLots) * 100))
      }

      const blob = await zip.generateAsync({ type: 'blob', streamFiles: true })

      console.log(blob.size)

      saveAs(blob, 'sorteos.zip')
    } catch (error) {
      const err = error as AxiosError

      if (err.response?.status === 401) {
        alert('No tienes autorización')
        setLoading(false)
      }
    } finally {
      setLoading(false)
      setDownloadProgress(0)
    }
  }

  useEffect(() => {
    const tokenAdmin = sessionStorage.getItem('token-admin') ?? ''

    if (!tokenAdmin) {
      navigate('/admin')
    }
  }, [])
  return (
    <>
      {loading && (
        <>
          <div class='absolute bottom-6 right-6 z-30'>
            <ProgressBar progress={downloadProgress} />
          </div>
          <Loading />
        </>
      )}
      <div class='flex flex-col items-center justify-center min-w-full px-8 bg-[url("/bg-admin.png")]'>
        <NavbarAdmin handleLogOut={handleLogOut} />
        <section class='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
          <div class='py-6 text-center flex flex-col justify-center items-center'>
            <h2 class='font-amsi-bold text-brown text-4xl text-center mb-8 flex items-center gap-6'>
              <img
                src={iconAdmin}
                alt='administracion nestle'
                class='size-12'
              />
              Dashboard
            </h2>
            <p class='text-balance font-amsi-regular text-center mb-6'>
              Participantes de la promoción “Sé un gamer distinto con TANGO®”
            </p>
          </div>
          <div class='pt-8 md:pt-12 grid auto-cols-auto sm:grid-cols-2 gap-4'>
            <div class='px-1 flex flex-col justify-center items-center gap-y-5'>
              <figure class='flex flex-col items-center justify-center'>
                <img
                  src={userDownloadNotCardSvg}
                  alt='Download user'
                  class='max-w-20'
                />
              </figure>
              <button
                class='text-n-orange rounded-2xl px-6 font-amsi-bold py-1 border-4 border-n-orange text-sm sm:text-base'
                onClick={handleDownLoadUsers}
              >
                Descargar Usuarios
              </button>
            </div>
            <div class='px-1 flex flex-col justify-center items-center gap-y-5'>
              <figure class='flex flex-col items-center justify-center'>
                <img
                  src={userDownloadSvg}
                  alt='Download user'
                  class='max-w-20'
                />
              </figure>
              <button
                class='text-n-orange rounded-2xl px-6 font-amsi-bold py-1 border-4 border-n-orange text-sm sm:text-base'
                onClick={handleDownloadLots}
              >
                Descargar fotos
              </button>
            </div>
          </div>
        </section>
        <footer class='pt-16'>
          <img src={visualNestle} alt='footer nestle' />
        </footer>
      </div>
    </>
  )
}
