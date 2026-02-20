import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
    const {navigate, token} = useAppContext()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Hero section is approximately 100vh, transition starts at 70vh for smoother effect
            const scrollPosition = window.scrollY
            const heroHeight = window.innerHeight * 0.7
            setIsScrolled(scrollPosition > heroHeight)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Check initial position

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/95 border-b border-[#E5E5E3]/50 shadow-sm' 
          : 'backdrop-blur-xl bg-black/5 border-b border-white/10'
      }`}
    >
      <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
        <h1 
          onClick={()=>navigate('/')} 
          className={`font-heading text-2xl sm:text-3xl font-normal cursor-pointer hover:text-primary transition-all duration-300 ease-in-out ${
            isScrolled ? 'text-[#111111]' : 'text-white'
          }`}
        >
          Scribe
        </h1>
        <button 
          onClick={()=>navigate('/admin')}  
          className={`flex items-center gap-2 rounded-md text-base font-medium cursor-pointer px-4 py-1.5 hover:bg-[#1d4ed8] transition-all duration-300 ease-in-out font-body ${
            isScrolled 
              ? 'bg-primary text-white' 
              : 'bg-white/20 text-white border border-white/30 backdrop-blur-sm hover:bg-white/30'
          }`}
        >
          {token ? 'Dashboard' : 'Login'}
          <img src={assets.arrow} className='w-3' alt="arrow" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
