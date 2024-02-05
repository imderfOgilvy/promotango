import { useEffect } from 'preact/hooks'
import { navigate } from 'wouter/use-location'
import type { ChildrenComponent } from '@/lib/types'

export default function Layout({ children }: ChildrenComponent) {
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])

  return (
    <section class="relative bg-n-orange min-h-screen bg-[url('/bg-how.png')] md:bg-[url('/new-bg-desktop.png')] bg-no-repeat bg-top bg-cover md:bg-contain">
      {children}
    </section>
  )
}
