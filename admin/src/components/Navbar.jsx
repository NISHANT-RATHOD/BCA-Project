import React from 'react'
import {assets} from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between '>
        <img className='w-[max(10%,50px)]' src={assets.logo} alt="" />
        {/* <button onClick={()=>{setToken('')}} className='bg-gray-600 text-white px-5 py-2 sm:px-7  rounded-full text-xs sm:text-sm'>Logout</button> */}
        <button
        onClick={()=>{setToken('')}}
        className="rounded-md border-2  mt-2 border-black bg-white px-3 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none"
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar