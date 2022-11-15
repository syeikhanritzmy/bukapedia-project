import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += action.payload.cartQuantity
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: action.payload.cartQuantity,
        }
        state.items.push(tempProduct)
      }
    },

    incrementQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      state.items[itemIndex].cartQuantity += 1
    },

    decrementQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1
      } else {
        return state.items.filter((item) => item.id !== action.payload.id)
      }

      if (state.items[itemIndex].cartQuantity === 0) {
        return state.items.filter((item) => item.id !== action.payload.id)
      }
    },

    includeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      state.items[itemIndex].Sum = !state.items[itemIndex].Sum
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },

    batchRemove: (state, action) => {
      return state.items.filter((item) => !action.payload.id.includes(item.id))
    },
  },
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  includeItem,
  removeFromCart,
  batchRemove,
} = cartSlice.actions
export default cartSlice.reducer
