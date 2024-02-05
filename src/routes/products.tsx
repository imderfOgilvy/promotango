import { Link } from 'wouter'
import iconCamera from '/icon-camera.png'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { productsPage } from '../lib/const'
import Layout from '../layouts/Layout'
import { useEffect } from 'preact/hooks'
import ReactGA from 'react-ga4'

export default function ProductsPage() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Productos Tango',
    })
  }, [])
  return (
    <Layout>
      <Navbar />
      <div class='grid place-items-center'>
        <div class='lg:mt-16'>
          <div class='pt-12'>
            <h2 class='text-center text-white text-xl text-balance lg:text-4xl font-amsi-bold uppercase mt-8 px-4'>
              Farmea estos productos TANGO® y participa
            </h2>
          </div>
          <div class='mt-4 py-2 px-6 grid auto-cols-auto lg:grid-cols-3 gap-x-8 gap-y-10'>
            {productsPage.map((e) => (
              <div class='border-b-c-coffe flex items-center justify-center gap-x-5 border-b pb-3'>
                <figure class='flex-1 flex justify-center items-center lg:p-4'>
                  <img
                    src={e.photo}
                    alt={e.label}
                    class='object-contain'
                    style={{
                      width: e.width,
                    }}
                  />
                </figure>
                <div class='flex-1 -ml-2'>
                  <div>
                    <h2 class='text-white font-amsi-bold uppercase text-balance text-lg lg:text-base'>
                      {e.label}
                    </h2>
                  </div>
                  <div>
                    <small class='text-white font-amsi-bold'>{e.gr}</small>
                  </div>
                </div>
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
