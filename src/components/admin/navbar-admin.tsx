import profileUserAdminSvg from '/profile.svg'
import logoPng from '/logo.png'
import { useEffect, useState } from 'preact/hooks'

export function NavbarAdmin({ handleLogOut }: { handleLogOut: () => void }) {
  const [username, setUsername] = useState('')

  useEffect(() => {
    const storageUsername = sessionStorage.getItem('admin-name') ?? ''

    if (storageUsername) {
      setUsername(JSON.parse(storageUsername))
    }
    return () => {}
  }, [])
  return (
    <header class='flex justify-between items-center bg-n-orange px-4 md:px-12 py-4 rounded-2xl gap-x-4 w-full mt-4'>
      <figure class='flex items-center'>
        <img
          src={logoPng}
          alt='Logo image nestle'
          class='max-w-24 md:max-w-32'
        />
      </figure>
      <div class='flex items-center justify-center gap-x-2 sm:gap-12'>
        <nav>
          <figure class='flex gap-x-2 items-center'>
            <img
              src={profileUserAdminSvg}
              alt='Profile nestle'
              class='object-contain max-w-12'
            />
            <figcaption class='font-amsi-bold text-white'>
              Hola, {username}
            </figcaption>
          </figure>
        </nav>
        <button
          class='border border-white rounded-xl px-2 sm:px-4 py-1 flex items-center font-amsi-regular text-white'
          onClick={handleLogOut}
        >
          Cerrar Session
        </button>
      </div>
    </header>
  )
}
