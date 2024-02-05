import { Link } from 'wouter'
import iconCamera from '/icon-camera.png'
import Navbar from '../components/navbar'
import { awardsConst } from '../lib/const'
import Footer from '../components/footer'
import LayoutBgDashboard from '../layouts/Layout'
import { useEffect } from 'preact/hooks'
import ReactGA from 'react-ga4'

export default function Awards() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Premios Tango',
    })
  }, [])
  return (
    <LayoutBgDashboard>
      <Navbar />
      <div class='grid place-items-center'>
        <div class='lg:mt-16'>
          <div class='pt-12'>
            <h2 class='text-center text-white text-xl px-2 text-balance lg:text-4xl font-amsi-bold'>
              ¡CONVIÉRTETE EN EL JUGADOR DE LA SEMANA CON ESTOS PREMIOS!
            </h2>
          </div>
          <div class='mt-4 py-2 px-4 grid grid-cols-2 lg:grid-cols-5 gap-6'>
            {awardsConst.map((elem, index) => (
              <div class={`col-span-${index === 0 ? '2' : '1'}`} key={index}>
                <div class='bg-c-coffe rounded-lg p-3 shadow-md h-[200px]'>
                  <figure class='flex justify-center items-center h-full'>
                    <img
                      src={elem.photo}
                      alt={elem.label}
                      class='object-contain'
                    />
                  </figure>
                </div>
                <button class='bg-red-600 text-white rounded-xl font-bold text-lg text-center w-full py-1 hover:opacity-95 self-end mt-4 uppercase font-amsi-bold'>
                  {elem.label}
                </button>
              </div>
            ))}
          </div>
          <div class='container mx-auto'>
            <p class='text-white font-amsi-regular text-center'>
              Imágenes referenciales*.
            </p>
            <h2 class='text-white font-amsi-bold text-center text-xl mt-8'>
              ::Recuerda::
            </h2>
            <h2 class='text-white text-lg font-amsi-regular text-center uppercase'>
              CONSERVA LOS EMPAQUES Y LAS FACTURAS DE TUS PRODUCTOS PARA REDIMIR
              TUS PREMIOS SI RESULTAS GANADOR(A)
            </h2>
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
    </LayoutBgDashboard>
  )
}
