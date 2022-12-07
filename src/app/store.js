import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice'
import productsReducer from '../features/productsSlice'
import specificProductsReducer from '../features/specificProductsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    specificProducts: specificProductsReducer,
  },
});
