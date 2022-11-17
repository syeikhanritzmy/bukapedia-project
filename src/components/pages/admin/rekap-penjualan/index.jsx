import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import RekapPenjualan from './RekapPenjualan'

function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>BukaPedia - Rekap Penjualan</title>
        </Helmet>
      </HelmetProvider>

      <RekapPenjualan />
    </>
  )
}

export default index
