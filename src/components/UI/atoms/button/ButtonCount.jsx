import React, { useState } from 'react'

function ButtonCount() {
  const [count, setCount] = useState(0)

  function handleSubstract() {
    count > 0 ? setCount(count - 1) : setCount(0)
  }

  function handelAdd() {
    setCount(count + 1)
  }

  return (
    <>
      <button
        className='rounded-md bg-slate-100 p-3.5'
        onClick={handleSubstract}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
        </svg>
      </button>

      <span className='text-lg font-semibold text-gray-900'>{count}</span>

      <button className='rounded-md bg-slate-100 p-3.5' onClick={handelAdd}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-4 w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
      </button>
    </>
  )
}

export default ButtonCount
