import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slides/counterSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
// export let persistor = persistStore(store)