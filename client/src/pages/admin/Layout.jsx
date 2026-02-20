import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {

    const {axios, setToken, navigate} = useAppContext()

    const logout = ()=>{
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = null;
        setToken(null)
        navigate('/')
    }

  return (
    <>
      <div className='flex items-center justify-between py-3 h-[70px] px-4 sm:px-8 border-b border-[#E5E5E3] bg-white'>
        <h1 className='font-heading text-2xl sm:text-3xl font-normal text-[#111111] cursor-pointer hover:text-primary transition-colors duration-150 ease-in-out' onClick={()=> navigate('/')}>
          Scribe
        </h1>
        <button 
          onClick={logout} 
          className='text-base font-medium px-4 py-1.5 bg-primary text-white rounded-md cursor-pointer hover:bg-[#1d4ed8] transition-colors duration-150 ease-in-out font-body'
        >
          Logout
        </button>
      </div>
      <div className='flex h-[calc(100vh-70px)] bg-[#F9F9F8]'>
        <Sidebar />
        <div className='flex-1 bg-white p-6 md:p-8 overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
