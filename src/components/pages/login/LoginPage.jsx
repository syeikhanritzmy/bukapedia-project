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
      <div className='md:layout mx-auto mt-12 max-w-screen-xl xs:my-12'>
        <div className='h-screensize grid items-center justify-center md:grid-cols-2'>
          <div className='mx-auto w-40 md:w-8/12'>
            <img className='' src={LoginImg} alt='login' />
          </div>

          <div className='items-center rounded-lg bg-white shadow-2xl shadow-gray-200'>
            <div className='px-10 py-16'>
              <h2 className='flex justify-center text-xl font-bold text-gray-900 lg:text-2xl'>
                Welcome back!
              </h2>
              <span className='mt-2 flex justify-center text-sm font-normal text-gray-800 md:text-base'>
                Please login with email address
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
