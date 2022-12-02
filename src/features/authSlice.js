import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axiosInstance from '../axios'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const navigate = useNavigate()

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        const response = await axiosInstance.post('/login', data)

        if(response.data.status === 200) {
            if(response.data.role === 'user'){
                navigate('/')
            }else if(response.data.role === 'admin'){
                navigate('/dashboard')
            }
        } else if(response.data.status === 401) {
            Toast.fire({
                icon: 'errpr',
                title: response.data.message
            })
        }

        if(response.data) {
            localStorage.setItem('token', response.data.token)
        }

        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const token = localStorage.getItem("token")

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
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.completed = true
            state.loading = false
            state.error = false
            state.user = action.payload
        })
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        builder.addCase(login.rejected, (state) => {
            state.error = true
            state.completed = false
            state.loading = false
        })
    }
})

export default authSlice.reducer