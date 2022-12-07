import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice'
import productsReducer from '../features/productsSlice'
import latestProductsReducer from '../features/latestProductsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    latestProducts: latestProductsReducer,
  },
});
