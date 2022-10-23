import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API = import.meta.env.VITE_BASE_URL + '/products'

const initialState = {
  product: {},
  loading: false,
}

export const fetchProductDetail = createAsyncThunk(
  'productDetail/fetchProductDetail',
  async (productId) => {
    try {
      const res = await axios.get(API + `/${productId}`)
      return res.data
    } catch (e) {
      throw new Error(e)
    }
  }
)

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducer: {},
  extraReducers: {
    [fetchProductDetail.pending]: (state) => {
      state.loading = true
    },
    [fetchProductDetail.fulfilled]: (state, { payload }) => {
      state.product = payload
      state.loading = false
    },
    [fetchProductDetail.rejected]: (state, action) => {
      state.loading = true
      state.error = action.error.message
    },
  },
})

export default productDetailSlice.reducer
