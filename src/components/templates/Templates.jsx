import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from '../UI/organisms/navbar/Navbar'

import HomePage from '../pages/user/home'
import ProductDetailPage from '../pages/user/product-detail'
import CartPage from '../pages/user/cart'
import LoginPage from '../pages/login'

import HomeAdminPage from '../pages/admin/home'

import NotFoundPage from '../pages/not-found'

function Templates() {
  const authAdmin = useSelector((state) => state.authAdmin.auth)

  return (
    <>
      <Navbar />

      <Routes>
        {authAdmin.token ? (
          <>
            <Route path='/' element={<HomeAdminPage />} />
            <Route path='/login' element={<LoginPage />} />
          </>
        ) : (
          <>
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:productId' element={<ProductDetailPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/login' element={<LoginPage />} />
          </>
        )}

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default Templates
