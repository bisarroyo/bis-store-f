import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import itemsReducer from '../reducers'

export default configureStore({
  reducer: {
    items: itemsReducer
  },
  middleware: [thunk]
})
