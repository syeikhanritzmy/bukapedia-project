import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import notif from 'react-hot-toast'
import axios from 'axios'

const API = import.meta.env.VITE_BASE_URL + '/products'

const initialState = {
  product: [],
  loading: false,
  stock: JSON.parse(localStorage.getItem('stock')) || 20,
}

export const fetchStockProducts = createAsyncThunk(
  'stockProduct/fetchStockProducts',
  async () => {
    try {
      const res = await axios.get(API)
      return res.data
    } catch (e) {
      throw new Error(e)
    }
  }
)

const stockProductSlice = createSlice({
  name: 'stockProducts',
  initialState,
  reducers: {
    setStock: (state, action) => {
      state.stock = action.payload
    },

    setStockProduct: (state, action) => {
      const itemIndex = state.product.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.product[itemIndex].stock = action.payload.stock
      } else {
        state.product.push({
          id: action.payload.id,
          stock: action.payload.stock,
        })
      }

      localStorage.setItem('stock', JSON.stringify(state.product))
      notif.success('Stock has been updated')
    },
  },
  extraReducers: {
    [fetchStockProducts.pending]: (state) => {
      state.loading = true
    },
    [fetchStockProducts.fulfilled]: (state, { payload }) => {
      state.product = payload
      state.loading = false
    },
    [fetchStockProducts.rejected]: (state, action) => {
      state.loading = true
      state.error = action.error.message
    },
  },
})

export const { setStock, setStockProduct } = stockProductSlice.actions

export default stockProductSlice.reducer
