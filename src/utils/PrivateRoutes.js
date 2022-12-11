import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

function PrivateRoutes() {
    const token = localStorage.getItem('token')
    // const role = localStorage.getItem('role')
    const { user, loading } = useSelector((state) => state.auth)

    if (loading) {
        return <ClipLoader />
    } else {
        if (user) {
            if (user.role !== 'admin') {
                return (
                    <Navigate to="/" />
                )
            } else {
                return (
                    <Outlet />
                )
            }
        } else {
            return (
                <Navigate to="/" />
            )
        }
    }
}

export default PrivateRoutes