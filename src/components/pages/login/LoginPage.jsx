import React, { useState } from 'react'
import LoginImg from '../../../assets/login/login-image.svg'
import FormLogin from '../../UI/organisms/form/FormLogin'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailChange = (e) => {
    setEmail(e.target.value)
  }

  const passwordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='md:layout my-12 mx-auto max-w-screen-xl'>
        <div className='h-screensize grid items-center justify-center md:grid-cols-2'>
          <div className='mx-auto w-40 md:w-8/12'>
            <img className='' src={LoginImg} alt='login' />
          </div>

          <div className='items-center rounded-lg bg-white shadow-2xl shadow-gray-200'>
            <div className='px-10 py-16'>
              <h2 className='flex justify-center text-lg font-bold text-gray-900 md:text-xl lg:text-2xl'>
                Selamat Datang Kembali!
              </h2>
              <span className='mt-2 flex justify-center text-sm font-normal text-gray-800 md:text-base'>
                Silakan masuk dengan alamat email
              </span>

              <div className='mt-8'>
                <FormLogin
                  handleSubmit={handleSubmit}
                  emailChange={emailChange}
                  passwordChange={passwordChange}
                  buttonName={'Login'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
