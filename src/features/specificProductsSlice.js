import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../axios'

export const getLatestProducts = createAsyncThunk('products/getLatestProducts', async () => {
    try {
        const response = await axiosInstance.get('/specific-products')
        return response.data
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    latest_products: [],
    home_products: [],
    completed: false,
    loading: false,
    error: false,
}

const specificProductsSlice = createSlice({
    name: "specificProducts",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getLatestProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getLatestProducts.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.latest_products = action.payload.latest_products
            state.home_products = action.payload.home_products
        })
        builder.addCase(getLatestProducts.rejected, (state) => {
            state.error = true
            state.loading = false
        })
    }
})

export default specificProductsSlice.reducer