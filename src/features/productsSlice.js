import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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