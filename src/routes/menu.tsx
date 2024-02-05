import { Link } from 'wouter'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import iconCamera from '/icon-camera.png'
import { normas } from '../lib/const'
import Layout from '../layouts/Layout'
import ReactGA from 'react-ga4'
import { useEffect } from 'preact/hooks'

export default function MenuPage() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Menu Tango',
    })
  }, [])
  return (
    <Layout>
      <Navbar />
      <div class='grid place-items-center'>
        <div class='lg:mt-16'>
          <div class='mt-16 py-2 px-4 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6'>
            {normas.map((elem) => (
              <div class='bg-c-coffe rounded-lg p-3 flex flex-col h-full justify-between'>
                <figure class='flex justify-center items-center h-full'>
                  <img
                    src={elem.photo}
                    alt={elem.label}
                    class='object-contain'
                  />
                </figure>
                <h2 class='font-amsi-bold text-red-500 text-center text-xl lg:text-2xl my-2'>
                  {elem.label}
                </h2>
                <button class='bg-red-600 text-white rounded-xl font-bold text-md text-center w-full py-1 hover:opacity-95 self-end lg:text-lg uppercase font-amsi-bold'>
                  <Link to={elem.path}>{elem.text}</Link>
                </button>
              </div>
            ))}
          </div>
          <div class='mt-10 px-6'>
            <button
              type='button'
              class='border border-dashed border-c-brown p-4 mt-4 rounded-xl cursor-pointer block w-full'
            >
              <Link to='/'>
                <h3 class='text-2xl font-amsi-bold text-c-brown text-center'>
                  SUBE LA FOTO DE TU PRODUCTO TANGO® Y NÚMERO DE LOTE
                </h3>
                <figure class='flex justify-center items-center py-1'>
                  <img src={iconCamera} alt='subir foto tango' class='w-16' />
                </figure>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
