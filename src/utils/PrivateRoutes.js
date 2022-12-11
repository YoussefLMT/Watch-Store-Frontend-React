import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
    const token = localStorage.getItem('token')
    // const role = localStorage.getItem('role')
    const { user } = useSelector((state) => state.auth)
    
    if(user && user.role === 'admin'){
        return (
            <Outlet /> 
        )
    }else {
        return (
             <Navigate to="/" />
        )
    }
}

export default PrivateRoutes