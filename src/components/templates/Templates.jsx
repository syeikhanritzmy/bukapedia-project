import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../UI/organisms/navbar/Navbar';

import HomePage from '../pages/user/home';
import ProductDetailPage from '../pages/user/product-detail';
import LoginPage from '../pages/login';
import NotFoundPage from '../pages/not-found';
import CartPage from '../pages/user/cart';
function Templates() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default Templates;
