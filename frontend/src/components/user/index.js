import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavUser } from './NavUser';
const User = () => {
  return (
    <div>
      <NavUser/>
      <Outlet/>
    </div>
  )
}

export default User