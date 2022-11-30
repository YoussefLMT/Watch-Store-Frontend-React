import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

export const logIn = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        const responce = await axios.post('api/login', data)

        if(responce.data.status === 201) {
            Swal.fire(
                'Success',
                responce.data.message,
                'success'
            );
        } else if(responce.data.status === 401) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: responce.data.message,
            });
            return
        } else {
            thunkAPI.dispatch(setError(responce.data.validation_err))
        }

        if(responce.data) {
            localStorage.setItem('token', responce.data.token)
        }

        thunkAPI.dispatch(setUser(responce.data.role))
        thunkAPI.dispatch(setToken(localStorage.getItem("token")))

        return responce.data
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