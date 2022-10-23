import React from 'react'

function Skeleton() {
  return (
    <>
      <div role='status' className='animate-pulse'>
        <div className='flex h-48 w-auto items-center justify-center rounded bg-gray-100 sm:h-64'></div>

        <span className='sr-only'>Loading...</span>
      </div>
    </>
  )
}

export default Skeleton
