import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {

  return (
    <div className='w-full min-h-screen p-6 bg-black text-white '>
      <Navbar/>
      <Outlet/>   
    </div>
  )
}

export default MainLayout