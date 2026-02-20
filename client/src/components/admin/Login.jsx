import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';
import { data } from 'react-router-dom';

const Login = () => {

    const {axios, setToken} = useAppContext();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
          const {data} = await axios.post('/api/admin/login', {email, password})

          if(data.success){
            setToken(data.token)
            localStorage.setItem('token', data.token)
            axios.defaults.headers.common['Authorization'] = data.token;
          }
          else{
            toast.error(data.message)
          }
        } catch (error) {
          toast.error(error.message)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#F9F9F8] px-4'>
      <div className='w-full max-w-sm p-6 md:p-8 bg-white border border-[#E5E5E3] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]'>
        <div className='flex flex-col'>
            <div className='w-full pb-6 text-left'>
                <h1 className='font-heading text-2xl font-normal text-[#111111]'>Admin Login</h1>
                <p className='mt-2 text-sm text-[#555555] font-body'>Enter your credentials to access the admin panel.</p>
            </div>
            <form onSubmit={handleSubmit} className='mt-2 w-full text-[#111111] space-y-4'>
                <div className='flex flex-col'>
                    <label className='text-sm font-medium text-[#374151] mb-1 font-body'>Email</label>
                    <input 
                      onChange={e=> setEmail(e.target.value)} 
                      value={email} 
                      type="email" 
                      required 
                      placeholder='you@example.com' 
                      className='w-full px-3 py-2 text-base border border-[#E5E5E3] rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-body'
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm font-medium text-[#374151] mb-1 font-body'>Password</label>
                    <input 
                      onChange={e=> setPassword(e.target.value)} 
                      value={password} 
                      type="password" 
                      required 
                      placeholder='Your password' 
                      className='w-full px-3 py-2 text-base border border-[#E5E5E3] rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-body'
                    />
                </div>
                <button 
                  type="submit" 
                  className='w-full py-2.5 text-base font-medium bg-primary text-white rounded-md cursor-pointer hover:bg-[#1d4ed8] transition-colors duration-150 ease-in-out font-body'
                > 
                  Login 
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
