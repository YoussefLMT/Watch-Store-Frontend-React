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

const initialState = {
    products: [],
    completed: false,
    loading: false,
    error: false,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
})

export default productsSlice.reducer