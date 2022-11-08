import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import notif from 'react-hot-toast'

const token = 'WuieWUNOPP9893nn89'

const initialState = {
  auth: JSON.parse(localStorage.getItem('auth')) || [],
  loading: false,
}

function loginAdmin(email, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (email === 'admin@bukapedia.com' && password === 'admin123') {
        resolve({
          token: token,
        })
      } else {
        reject('Invalid Email or Password')
      }
    }, 500)
  })
}

export const authAdminLogin = createAsyncThunk(
  'auth/authAdminLogin',
  async ({ email, password }) => {
    try {
      const res = await loginAdmin(email, password)
      localStorage.setItem('auth', JSON.stringify(res))
      return res
    } catch (e) {
      throw new Error(e)
    }
  }
)

const authAdminSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {},
  extraReducers: {
    [authAdminLogin.pending]: (state) => {
      state.loading = true
    },
    [authAdminLogin.fulfilled]: (state, { payload }) => {
      state.auth = payload
      state.loading = false
    },
    [authAdminLogin.rejected]: (state, { error }) => {
      state.loading = false
      notif.error(error.message)
    },
  },
})

export default authAdminSlice.reducer
