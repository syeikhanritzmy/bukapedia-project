import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice'
import productDetailReducer from '../features/product-detail/productDetailSlice'
import cartReducer from '../features/cart/cartSlice'
import stockProductReducer from '../features/stock-product/stockProductSlice'
import authUserReducer from '../features/auth/user/authUserSlice'
import authAdminReducer from '../features/auth/admin/authAdminSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    stockProduct: stockProductReducer,
    authUser: authUserReducer,
    authAdmin: authAdminReducer,
  },
})
