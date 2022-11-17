import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import CartPage from './CartPage'

function index() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>BukaPedia - Cart</title>
        </Helmet>
      </HelmetProvider>

      <CartPage />
    </div>
  )
}

export default index
