import React from 'react'

function ButtonAddToCart({ buttonName }) {
  return (
    <>
      <button className='h-10 w-28 rounded-full border border-black bg-transparent text-sm font-medium text-gray-900 hover:border-slate-100 hover:bg-slate-100'>
        {buttonName}
      </button>
    </>
  )
}

export default ButtonAddToCart
