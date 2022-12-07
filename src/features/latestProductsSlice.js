import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../axios'

export const getLatestProducts = createAsyncThunk('products/getLatestProducts', async () => {
    try {
        const response = await axiosInstance.get('/latest-products')
        return response.data.products
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    latest_products: [],
    completed: false,
    loading: false,
    error: false,
}

const latestProductsSlice = createSlice({
    name: "latestProducts",
    initialState,
    
})

export default latestProductsSlice.reducer