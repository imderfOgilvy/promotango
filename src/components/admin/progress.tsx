const ProgressBar = ({ progress }: { progress: number | string }) => {
  return (
    <div className='relative pt-1'>
      <div className='flex mb-2 items-center justify-between gap-4'>
        <div>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-orange-400'>
            Descargando...
          </span>
        </div>
        <div className='text-right'>
          <span className='text-xs font-semibold inline-block text-white'>
            {`${progress}%`}
          </span>
        </div>
      </div>
      <div className='flex mb-2 items-center justify-start'>
        <div className='w-full'>
          <div className='h-2 flex items-center bg-white rounded-full'>
            <div
              style={{ width: `${progress}%` }}
              className='h-2 bg-orange-400 rounded-full'
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
