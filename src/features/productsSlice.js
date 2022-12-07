import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../axios'

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
        const response = await axiosInstance.get('/products')
        return response.data.products
    } catch (error) {
        console.log(error)
    }
})

export const getLatestProducts = createAsyncThunk('products/getLatestProducts', async () => {
    try {
        const response = await axiosInstance.get('/latest-products')
        return response.data.products
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    products: [],
    completed: false,
    loading: false,
    error: false,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.error = true
            state.loading = false
        })
    }
})

export default productsSlice.reducer