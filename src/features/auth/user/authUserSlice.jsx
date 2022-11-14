import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import notif from 'react-hot-toast'

const token = 'eyJhbGciOiJIUzI1NiIsInR'

const initialState = {
  auth: JSON.parse(localStorage.getItem('auth')) || [],
  loading: false,
}

function loginUser(email, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (email === 'mor_2314' && password === '83r5^_') {
        resolve({
          token: token,
        })
      } else {
        reject('Invalid Email or Password')
      }
    }, 500)
  })
}

export const authUserLogin = createAsyncThunk(
  'auth/authUserLogin',
  async ({ email, password }) => {
    try {
      const res = await loginUser(email, password)
      localStorage.setItem('auth', JSON.stringify(res))
      return res
    } catch (e) {
      throw new Error(e)
    }
  }
)

const authUserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [authUserLogin.pending]: (state) => {
      state.loading = true
    },
    [authUserLogin.fulfilled]: (state, { payload }) => {
      state.auth = payload
      state.loading = false
    },
    [authUserLogin.rejected]: (state, { error }) => {
      state.loading = false
      notif.error(error.message)
    },
  },
})

export default authUserSlice.reducer
