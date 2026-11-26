import React from 'react'
import {NavLink} from "react-router"
const Navbar = () => {
  return (
      <div className='pb-10 flex justify-between items-center'>
      <h1 className='font-semibold text-xl'>SkyDart</h1>
      <div className='flex items-center justify-between gap-18'>
      <NavLink  className={({isActive})=>{
        return isActive?"text-gray-500 font-semibold":"font-semibold"
      }}
      end 
      to={"/main"}>Home</NavLink>
      <NavLink  className={({isActive})=>
        {
          return isActive?"text-gray-500 font-semibold":"font-semibold"
        }
      } to={"/main/shop"}>Shop</NavLink>
      <NavLink className={({isActive})=>
        {
          return isActive?"text-gray-500 font-semibold":"font-semibold"
        }
      } to={"/main/about"}>About</NavLink>
      </div>
      <div className='flex items-center justify-between gap-8'>
        <p>hey,<strong>Dev</strong></p>
    <button className='bg-white px-3 py-2 text-black cursor-pointer rounded-xl font-semibold' >LogOut</button>
      </div>
    </div>

  )
}

export default Navbar