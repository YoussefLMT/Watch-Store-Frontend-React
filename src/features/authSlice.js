import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
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

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        const response = await axiosInstance.post('/login', data)

        if(response.data.status === 200) {
            Toast.fire({
                icon: 'success',
                title: response.data.message
            })
        } else if(response.data.status === 401) {
            Toast.fire({
                icon: 'errpr',
                title: response.data.message
            })
        }

        if(response.data) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('role', response.data.role)
        }

        // thunkAPI.dispatch(setUser(response.data.role))

        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

// export const getUserData = createAsyncThunk('auth/getUserData', async (_, thunkAPI) => {
//     try {
//         const response = await axiosInstance.get('/get-user')

//         return response.data
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
// })

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const responce = await axiosInstance.post('/logout')

        localStorage.removeItem('token')
        localStorage.removeItem('role')

        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const token = localStorage.getItem("token")
const role = localStorage.getItem("role")

const initialState = {
    user: null,
    token: token ? token : null,
    role: role ? role : null,
    completed: false,
    loading: false,
    error: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    // reducers: {
    //     setUser: (state, action) => {
    //         state.user = action.payload
    //     },
    // },   
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


        // builder.addCase(getUserData.fulfilled, (state, action) => {
        //     state.completed = true
        //     state.loading = false
        //     state.error = false
        //     state.user = action.payload.userData
        // })
        // builder.addCase(getUserData.pending, (state) => {
        //     state.loading = true
        // })
        // builder.addCase(getUserData.rejected, (state) => {
        //     state.error = true
        //     state.completed = false
        //     state.loading = false
        //     state.user = null
        //     state.token = null
        // })


        builder.addCase(logout.fulfilled, (state) => {
            state.completed = true
            state.loading = false
            state.error = false
            // state.user = null
            // state.token = null
        })
        builder.addCase(logout.pending, (state) => {
            state.loading = true
        })
        builder.addCase(logout.rejected, (state) => {
            state.error = true
            state.completed = false
            state.loading = false
        })
    }
})

export const { setUser } = authSlice.actions

export default authSlice.reducer