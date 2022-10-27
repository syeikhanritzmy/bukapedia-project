import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import notif from 'react-hot-toast'

const initialState = {
  auth: [],
  loading: false,
}

function loginAdmin(email, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (email === 'admin@bukapedia.com' && password === 'admin123') {
        resolve({
          email: email,
          password: password,
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
      localStorage.setItem('auth', JSON.stringify(payload))
      notif.success('Login Success')
    },
    [authAdminLogin.rejected]: (state, { error }) => {
      state.loading = false
      notif.error(error.message)
    },
  },
})

export default authAdminSlice.reducer
