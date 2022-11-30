import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

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

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        const response = await axios.post('api/login', data)

        if(responce.data.status === 201) {
            Toast.fire({
                icon: 'success',
                title: response.data.message
            })
        } else if(responce.data.status === 401) {
            Toast.fire({
                icon: 'errpr',
                title: response.data.message
            })
            return
        } else {
            thunkAPI.dispatch(setError(response.data.validation_err))
        }

        if(response.data) {
            localStorage.setItem('token', response.data.token)
        }

        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

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