import React, { useEffect } from 'react'
import { useState } from 'react'
import ButtonAddToCart from '../../atoms/button/ButtonAddToCart'

function Card({ srcImg, altImg, title, price, clickProductDetail, product }) {
  const [count, setCount] = useState(0)

  const addOneToCart = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    addOneToCart()
  }, [])
  return (
    <>
      <div className='bg-white pb-8 shadow-sm shadow-slate-100 hover:shadow-sm hover:shadow-gray-200 hover:transition-all'>
        <div className='cursor-pointer' onClick={clickProductDetail}>
          <div className='rounded-md bg-slate-100/40 p-4'>
            <img
              src={srcImg}
              alt={altImg}
              className='h-24 w-full object-scale-down md:h-32'
            />
          </div>
          <div className='mt-2 px-4'>
            <h3
              className='cursor-pointer text-left text-sm font-semibold text-gray-900 hover:text-blue-600 md:text-base lg:text-lg'
              onClick={clickProductDetail}
            >
              {title}
            </h3>
          </div>
        </div>

        <div className='mt-2 px-4'>
          <span className='text-sm font-bold text-gray-900 md:text-base'>
            <span className='text-xs md:text-sm'>$</span>
            {price}
          </span>
        </div>

        <div className='mt-4 flex justify-center'>
          <ButtonAddToCart
            buttonName={'Add to Cart'}
            product={product}
            counter={count}
          />
        </div>
      </div>
    </>
  )
}

export default Card
