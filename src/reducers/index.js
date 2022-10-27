import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  productsData: []
}

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = action.payload
    },
    products: (state, action) => {
      state.productsData = action.payload
    }
  }
})

export const { loading, products } = itemSlice.actions

export default itemSlice.reducer
