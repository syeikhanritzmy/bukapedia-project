import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import LoginPage from './LoginPage'
import { Toaster } from 'react-hot-toast'

function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>BukaPedia - Login</title>
        </Helmet>
      </HelmetProvider>

      <Toaster />
      <LoginPage />
    </>
  )
}

export default index
