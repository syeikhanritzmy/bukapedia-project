import React, { useState } from 'react'

function FormLogin({
  handleSubmit,
  email,
  emailChange,
  password,
  passwordChange,
  buttonName,
}) {
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='relative'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5 text-gray-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              />
            </svg>
          </div>
          <input
            type='text'
            className='block w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-blue-100 focus:outline-none focus:ring-1
                  focus:ring-blue-500'
            placeholder='Email'
            value={email}
            onChange={emailChange}
            required
          ></input>
        </div>

        <div className='relative mt-8'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5 text-gray-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
          </div>
          <input
            type={passwordShown ? 'text' : 'password'}
            className='block w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-blue-100 focus:outline-none focus:ring-1
                  focus:ring-blue-500'
            placeholder='Password'
            value={password}
            onChange={passwordChange}
            required
          ></input>

          <button
            type='button'
            className='absolute right-4 -mt-9'
            onClick={togglePassword}
          >
            {passwordShown ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5 text-gray-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5 text-gray-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                />
              </svg>
            )}
          </button>
        </div>

        <div className='mt-8'>
          <button
            type='submit'
            className='w-full rounded-full bg-blue-700 py-3 text-lg font-semibold text-white hover:bg-blue-600/90'
          >
            {buttonName}
          </button>
        </div>
      </form>
    </>
  )
}

export default FormLogin
