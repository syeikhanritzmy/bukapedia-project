import React from 'react'
import BannerImg from '../../../../assets/banner/mens-clothing.png'

function Banner({ buyNow }) {
  return (
    <>
      <div className='rounded-md bg-orange-100/70'>
        <div className='grid grid-flow-col py-8 px-4 md:px-12'>
          <div className='order-1 m-auto w-52 xs:w-72 md:w-80 lg:w-96'>
            <p className='text-xl font-bold text-blue-900 md:text-2xl lg:text-3xl'>
              Grab Upto 50% Off on Selected Men's Clothing
            </p>

            <button
              className='mt-6 h-10 w-24 rounded-full bg-blue-900 text-sm font-medium text-white hover:bg-blue-800 md:text-base'
              onClick={buyNow}
            >
              Buy Now
            </button>
          </div>

          <div className='order-2 m-auto h-auto w-28 md:w-40'>
            <img src={BannerImg} alt='mens clothing' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
