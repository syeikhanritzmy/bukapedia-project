import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice'
import productDetailReducer from '../features/product-detail/productDetailSlice'
import authAdminReducer from '../features/auth/admin/authAdminSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    productDetail: productDetailReducer,
    authAdmin: authAdminReducer,
  },
})
