import { useEffect } from 'preact/hooks'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Layout from '../layouts/Layout'
import { howToTakePart } from '../lib/const'
import ReactGA from 'react-ga4'

export default function HowToTakePartPage() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Como participar Tango',
    })
  }, [])

  return (
    <Layout>
      <Navbar />
      <div class='grid place-items-center'>
        <div class='lg:pt-16 pt-8'>
          <div class='container pt-16'>
            <h2 class='text-white font-amsi-bold text-3xl text-center'>
              ¿CÓMO PARTICIPAR?
            </h2>
          </div>
          <div class='pt-2 lg:p-4 lg:px-28 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {howToTakePart.map((elem) => (
              <div
                key={elem.step}
                class='p-3 flex items-center justify-center lg:justify-start'
              >
                <div class='-rotate-90 w-max -ml-8'>
                  <button class='p-1 bg-red-500 text-white font-amsi-bold px-6 rounded-xl min-w-28 text-xl'>
                    {elem.step}
                  </button>
                </div>
                <div class='flex items-center border border-c-coffee rounded-lg w-full p-2'>
                  <figure class='mt-4 flex-shrink-0'>
                    <img src={elem.photo} alt={elem.label} class='w-20 h-20' />
                  </figure>
                  <div class='ml-4'>
                    <p class='font-amsi-bold text-balance mt-4 lg:text-xl text-xs text-white overflow-hidden max-w-xs uppercase '>
                      {elem.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class='py-4 px-2 lg:px-0 lg:py-1 mt-8'>
            <div class='mt-4'>
              <h2 class='text-white font-amsi-bold text-center text-xl'>
                ::Recuerda::
              </h2>
              <h2 class='text-white text-lg font-amsi-regular text-center uppercase'>
                CONSERVA LOS EMPAQUES Y LAS FACTURAS DE TUS PRODUCTOS PARA
                REDIMIR TUS PREMIOS SI RESULTAS GANADOR(A)
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
