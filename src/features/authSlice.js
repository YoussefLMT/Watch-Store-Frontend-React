import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    user: null,
    token: token ? token : null,
    completed: false,
    loading: false,
    error: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
})

export default authSlice.reducer