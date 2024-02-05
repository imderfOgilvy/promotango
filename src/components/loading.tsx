// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import 'ldrs/ring'

export default function Loading({ m = '0rem' }: { m?: string }) {
  return (
    <>
      <div class='absolute inset-0 h-full bg-gray-500 opacity-50 w-full flex items-center justify-center'>
        <div class={`-mt-[${m}]`}>
          <l-ring
            size='50'
            stroke='5'
            bg-opacity='0'
            speed='2'
            color='white'
          ></l-ring>
        </div>
      </div>
    </>
  )
}
