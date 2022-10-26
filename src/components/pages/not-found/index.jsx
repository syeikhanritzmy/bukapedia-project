import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import NotFoundPage from './NotFoundPage'

function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>BukaPedia - Page Not Found</title>
        </Helmet>
      </HelmetProvider>

      <NotFoundPage />
    </>
  )
}

export default index
