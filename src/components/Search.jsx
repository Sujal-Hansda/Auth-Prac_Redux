import React, { useState } from 'react'

const Search = ({ setSearch, setCategory }) => {



  
  return (
    <div className=' w-full flex gap-5  items-center justify-between px-8 pb-10'>
      <input onChange={(e)=>{setSearch(e.target.value)}}  className='w-full outline-0'  type="text" placeholder='Search Products'/>
      <div className='flex items-center justify-between gap-14'>
        <select onChange={(e)=>{setCategory(e.target.value)}} className='bg-black text-white outline-0' name="" id="">
        <option value="">Choose Category</option>
        <option value="groceries">groceries</option>
        <option value="fragrances">fragrances</option>
        <option value="beauty">beauty</option>
        <option value="furniture">furniture</option>
      </select>
      <button className=' bg-white text-black rounded-xl px-6 py-2'>Search</button>
      </div>
      

    </div>
  )
}

export default Search