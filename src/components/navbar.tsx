import { Link } from 'wouter'
import menuCookiesPng from '/new-menu.png'
import logoPng from '/logo.png'

export default function Navbar() {
  return (
    <nav
      class='relative bg-transparent flex w-full flex-wrap items-center justify-end py-2 lg:py-4 px-4 lg:px-8'
      data-te-navbar-ref
    >
      <div class='flex w-full flex-wrap items-center justify-between px-3'>
        <div
          class='mt-2 flex-grow basis-[100%] items-center lg:mt-0 flex lg:basis-auto justify-between cursor-pointer lg:pt-10 lg:px-10'
          id='navbarSupportedContent4'
          data-te-collapse-item
        >
          <Link to='/' id='navbarSupportedContent4'>
            <img
              src={logoPng}
              alt=''
              className='w-[124px] md:w-auto object-contain'
            />
          </Link>
          <div id={'menu'} class='flex items-center flex-col py-1 px-2 bg-c-coffe rounded-2xl'>
            <small class='font-bold font-amsi-bold'>Menú</small>
            <Link to='/menu'>
              <img src={menuCookiesPng} class='w-12' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
