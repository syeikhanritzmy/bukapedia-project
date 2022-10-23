import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API = import.meta.env.VITE_BASE_URL + '/products'

const initialState = {
  product: [],
  loading: false,
}

export const fetchProducts = createAsyncThunk(
  'home/fetchProducts',
  async () => {
    try {
      const res = await axios.get(API)
      return res.data
    } catch (e) {
      throw new Error(e)
    }
  }
)

const homeSlice = createSlice({
  name: 'products',
  initialState,
  reducer: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.product = payload
      state.loading = false
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = true
      state.error = action.error.message
    },
  },
})

export default homeSlice.reducer
