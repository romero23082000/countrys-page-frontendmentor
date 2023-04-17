import { configureStore } from '@reduxjs/toolkit'
import countries from './features/country/countries'

export const store = configureStore({
  reducer: {
    country: countries
  },
})