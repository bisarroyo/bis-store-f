import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  description: ''
}

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    title: (state, action) => {
      state.title = action.payload
    },
    description: (state, action) => {
      state.description = action.payload
    }
  }
})

export const { title, description } = itemSlice.actions

export default itemSlice.reducer
