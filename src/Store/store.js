import { configureStore } from '@reduxjs/toolkit'
import { wineApi } from '../Api/Apislice'

export const store = configureStore({
  reducer: {
    [wineApi.reducerPath]: wineApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wineApi.middleware),
})