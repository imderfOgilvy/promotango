import type { Lot } from '../lib/types'

export default function Packing({ product_name, sequence_id }: Lot) {
  return (
    <article class='bg-c-coffe rounded-xl p-2 w-full flex items-center justify-between mt-2'>
      <div class='flex justify-center gap-x-4 items-center'>
        <div class='bg-red-500 rounded-full p-1 flex items-center justify-center w-7 h-7'>
          <small class='font-amsi-bold text-white'>
            {sequence_id < 10 ? `0${sequence_id}` : sequence_id}
          </small>
        </div>
        <h5 class='font-amsi-bold font-bold'>Empaque #{sequence_id}</h5>
      </div>
      <button class='bg-red-500 rounded-xl w-24 lg:w-80'>
        <small class='font-amsi-bold text-white uppercase'>
          {product_name}
        </small>
      </button>
    </article>
  )
}
