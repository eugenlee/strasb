import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  advertiser: true,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state) => {
      state.advertiser=!state.advertiser
    }
  },
})

export const { changeUser } = userSlice.actions

export default userSlice.reducer