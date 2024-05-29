import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Error404 from './pages/Error404'
import EditUser from './pages/EditUser'

const AppRouter = () => {
  return (
    <Routes>
        <Route path = "/" element = {<Login />} >
            <Route index element = {<Login />} />
        </Route>
        <Route path = "/register" element = {<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<EditUser />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default AppRouter
