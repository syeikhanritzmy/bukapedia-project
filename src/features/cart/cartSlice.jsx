import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API = import.meta.env.VITE_BASE_URL + '/products';

// export const fetchDataProduct = createAsyncThunk('cart/cartFetch', async () => {
//   try {
//     const res = await axios.get(API);
//     return res?.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// });

const initialState = {
  items: [],
  totalAmount: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += action.payload.cartQuantity;
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: action.payload.cartQuantity,
        };
        state.items.push(tempProduct);
      }
      // const finding = state.items.find((data) => data.id === action.payload.id);
      // if (!finding) {
      //   state.items = [
      //     ...state.items,
      //     { id: action.payload.id, product: action.payload, count: 1 },
      //   ];
      //   return;
      // }
      // state.items = state.items.filter((data) => data.id !== finding.id);
      // state.items = [
      //   ...state.items,
      //   { id: finding.id, product: finding.product, count: finding.count + 1 },
      // ];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
