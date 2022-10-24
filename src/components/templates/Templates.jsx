import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../UI/organisms/navbar/Navbar'

import HomePage from '../pages/home'
import ProductDetailPage from '../pages/product-detail'

function Templates() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:productId' element={<ProductDetailPage />} />
      </Routes>
    </>
  )
}

export default Templates
