import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ProductDetailPage from './ProductDetailPage'

function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>BukaPedia - Detail</title>
        </Helmet>
      </HelmetProvider>

      <ProductDetailPage />
    </>
  )
}

export default index
