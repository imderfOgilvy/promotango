import { Link } from 'wouter'
import iconFacebook from '/icon-facebook.png'
import iconInstagram from '/icon-instagram.png'
import iconTikTok from '/icon-tik-tok.png'
import { useEffect } from 'preact/hooks'

export default function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <footer className='lg:h-[45vh] relative overflow-x-hidden overflow-y-hidden pt-7 mt-4'>
      <div className="sm:bg-[url('/bg-footer-desktop.png')] bg-[url('/bg-footer.png')] bg-top lg:bg-center sm:!bg-cover bg-no-repeat absolute lg:scale-110 overflow-hidden inset-0 h-full w-full sm:scale-110" />
      <div class='relative z-20'>
        <div class='container mx-auto flex justify-center gap-x-8 items-center mt-16 px-4'>
          <button class='rounded-xl border border-c-coffe p-1.5 lg:p-2 text-c-coffe font-amsi-bold text-sm lg:text-base'>
            <Link to='/term'>TÉRMINOS Y CONDICIONES</Link>
          </button>
          <button class='rounded-xl border border-c-coffe p-1.5 text-c-coffe font-amsi-bold text-sm lg:text-base lg:p-2'>
            <Link to='/frequent-questions'>PREGUNTAS FRECUENTES </Link>
          </button>
        </div>
        <div class='container mx-auto mt-4 p-4'>
          <p class='text-balance text-white font-amsi-bold text-center lg:text-base text-sm'>
            Promoción válida a nivel nacional para mayores de 18 años residentes
            en el territorio ecuatoriano. Aplican términos y condiciones
            disponibles en esta página web. Promoción válida desde el 02 de
            enero hasta el 29 de febrero del 2024.
          </p>
        </div>
        <div class='container mx-auto flex items-center justify-center gap-x-4 mt-4 py-2'>
          <a href='https://www.facebook.com/TangoNestle' target='_blank'>
            <img src={iconFacebook} alt='facebook tongo' />
          </a>
          <a href='https://www.instagram.com/tangodenestle/' target='_blank'>
            <img src={iconInstagram} alt='instagram tongo' />
          </a>
          <a
            href='https://www.tiktok.com/@tangodenestleec?_t=8iZAY9YADm2&_r=1'
            target='_blank'
          >
            <img src={iconTikTok} alt='tik tok tongo' />
          </a>
        </div>
      </div>
    </footer>
  )
}
