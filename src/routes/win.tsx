import { Link } from 'wouter'
import iconCamera from '/icon-camera.png'
import winHuman from '/win-human.png'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { win } from '../lib/const'
import Layout from '../layouts/Layout'
import { useEffect } from 'preact/hooks'
import ReactGA from 'react-ga4'

export default function WinPage() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Ganadores Tango',
    })
  }, [])
  return (
    <Layout>
      <Navbar />
      <div class='grid place-items-center'>
        <div class='lg:mt-16'>
          <div class='pt-12'>
            <h2 class='text-center text-white text-xl px-2 text-balance lg:text-4xl font-amsi-bold uppercase'>
              ¡Felicitaciones a nuestros ganadores!
            </h2>
          </div>
          <div class='mt-4 py-2 px-6 grid auto-cols-auto lg:grid-cols-2 gap-x-8 gap-y-10'>
            {win.map((w) => (
              <div class='flex flex-col items-center gap-x-2 gap-y-4'>
                <div class='container mx-auto mb-2 p-2'>
                  <h2 class='text-white text-2xl font-amsi-bold uppercase text-center'>
                    {w.week}
                  </h2>
                </div>

                {w.wind.map((l) => (
                  <div class='flex items-center gap-x-2 gap-y-4'>
                    <figure>
                      <img src={winHuman} alt={l.label} />
                    </figure>
                    <div class='rounded-2xl bg-c-coffe px-4 py-1 lg:min-w-96 max-w-full'>
                      <small>{l.name}</small>
                      <h4 class='font-bold lg:text-xl'>{l.label}</h4>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div class='mt-10 px-6 container mx-auto'>
            <button
              type='button'
              class='border border-dashed border-c-brown p-8 mt-6 rounded-xl cursor-pointer block lg:w-max mx-auto'
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
