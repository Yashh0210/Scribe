import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  const baseClasses = "flex items-center gap-3 py-2.5 px-3 md:px-4 md:min-w-64 cursor-pointer text-sm transition-colors duration-150 ease-in-out"
  const activeClasses = "bg-blue-50 text-primary font-medium rounded-md"
  const inactiveClasses = "text-[#555555] hover:text-[#111111] hover:bg-[#F9F9F8]"

  return (
    <div className='flex flex-col border-r border-[#E5E5E3] min-h-full pt-4 bg-white'>
      <NavLink 
        end={true} 
        to='/admin' 
        className={({isActive})=> `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <img src={assets.home_icon} alt="" className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'>Dashboard</p>
      </NavLink>

      <NavLink 
        to='/admin/addBlog' 
        className={({isActive})=> `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <img src={assets.add_icon} alt="" className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'>Add blogs</p>
      </NavLink>

      <NavLink 
        to='/admin/listBlog' 
        className={({isActive})=> `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <img src={assets.list_icon} alt="" className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'>Blog lists</p>
      </NavLink>

      <NavLink 
        to='/admin/comments' 
        className={({isActive})=> `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <img src={assets.comment_icon} alt="" className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'>Comments</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
