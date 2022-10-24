import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import items from '../reducers'

export default configureStore({
  reducer: {
    items
  },
  middleware: [thunk]
})
