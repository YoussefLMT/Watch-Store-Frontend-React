import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
    let token = localStorage.getItem('token')
    const { user } = useSelector((state) => state.auth)
    return (
        token && user.role === 'admin' ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes