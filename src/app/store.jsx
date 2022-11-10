import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import productDetailReducer from '../features/product-detail/productDetailSlice';
import cartReducer from '../features/cart/cartSlice';
export const store = configureStore({
  reducer: {
    home: homeReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
  },
});
