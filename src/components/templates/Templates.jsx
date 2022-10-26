import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../UI/organisms/navbar/Navbar'

import HomePage from '../pages/user/home'
import ProductDetailPage from '../pages/user/product-detail'
import LoginPage from '../pages/login/LoginPage'

function Templates() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:productId' element={<ProductDetailPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default Templates
