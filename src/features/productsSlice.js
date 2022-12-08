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

export const getProduct = createAsyncThunk('products/getProduct', async (id) => {
    try {
        const response = await axiosInstance.get(`/get-product/${id}`)
        return response.data.product
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    products: [],
    product: [],
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


        builder.addCase(getProduct.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.product = action.payload
        })
        builder.addCase(getProduct.rejected, (state) => {
            state.error = true
            state.loading = false
        })
    }
})

export default productsSlice.reducer