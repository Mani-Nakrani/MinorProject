import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const auth = sessionStorage.getItem("token")
  return (
    <div>
        {auth ? <Outlet/> : <Navigate to='/log'/>}
    </div>
  )
}

export default PrivateRoute








// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=BLAEh3nXNIWZZ3X22va_NmvJDK6ibGtJRHE79srwDPp7OQCYXvqHWCB132WAszUgmWmwpr-20zWXtv6LRMyEq8o


// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=BLAEh3nXNIWZZ3X22va_NmvJDK6ibGtJRHE79srwDPp7OQCYXvqHWCB132WAszUgmWmwpr-20zWXtv6LRMyEq8o