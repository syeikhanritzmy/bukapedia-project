import React from 'react'

function SkeletonProductDetail() {
  return (
    <>
      <div role='status' className='layout mt-6 animate-pulse bg-white md:my-8'>
        <div>
          <div className='mb-4 h-2.5 w-6/12 rounded-full bg-slate-100'></div>
        </div>

        <div className='mt-6 grid gap-8 md:mt-8 md:grid-cols-2 md:gap-16'>
          <div className='flex h-44 w-auto items-center justify-center rounded bg-slate-100 sm:h-80'></div>

          <div>
            <h3 className='border-b border-gray-200 text-lg font-bold text-gray-900 lg:text-xl '>
              <div className='mb-4 h-2.5 w-full rounded-full bg-slate-100'></div>
            </h3>

            <div className='mt-4'>
              <div className='mb-2.5 h-2 w-full rounded-full bg-slate-100'></div>
              <div className='mb-2.5 h-2 w-10/12 rounded-full bg-slate-100'></div>
              <div className='mb-2.5 h-2 w-8/12 rounded-full bg-slate-100'></div>
              <div className='mb-2.5 h-2 w-11/12 rounded-full bg-slate-100'></div>
              <div className='h-2 rounded-full bg-slate-100'></div>
            </div>

            <div className='my-4 md:mt-4'>
              <div className='mb-4 h-2.5 w-40 rounded-full bg-slate-100'></div>
            </div>

            <div className='sticky bottom-0 flex justify-center bg-white py-2 md:relative md:mt-8 md:justify-start md:py-0'>
              <div className='flex items-center gap-12'>
                <div className='m-0 flex gap-12 md:mt-4'>
                  <div className='flex items-center gap-4'>
                    <div className='h-10 w-32 rounded-full bg-slate-100 lg:w-36'></div>
                  </div>
                </div>

                <div className='m-0 md:mt-4'>
                  <div className='h-10 w-32 rounded-full bg-slate-100 lg:w-36'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkeletonProductDetail
