import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotFoundImg from '../../../assets/error/error-not-found.png'

function NotFoundPage() {
  const navigate = useNavigate()

  const backToHome = () => {
    navigate('/')
  }

  return (
    <>
      <div className='layout h-screensize my-6 mx-auto max-w-screen-xl'>
        <div>
          <img
            className='mx-auto h-auto w-52 md:w-80 lg:w-96'
            src={NotFoundImg}
            alt='error-not-found'
          />
        </div>

        <div className='mt-4 flex justify-center'>
          <h3 className='text-lg font-bold text-gray-900 md:text-xl lg:text-2xl'>
            Oops! The page you were looking for was not found
          </h3>
        </div>

        <div className='mt-8 flex justify-center'>
          <button
            className='h-12 w-32 rounded-full bg-blue-700 text-sm font-medium text-white hover:bg-blue-600 md:h-14 md:w-36 md:text-base'
            onClick={backToHome}
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
