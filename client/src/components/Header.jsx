import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const {setInput, input} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e)=>{
     e.preventDefault();
     setInput(inputRef.current.value)
  }

  const onClear = ()=>{
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='relative'>
      {/* Hero Background Section - Extended for atmospheric effect */}
      <div className='hero-background relative min-h-[100svh] flex items-center justify-center px-4 sm:px-8 pt-20 pb-32'>
        <div className='max-w-4xl mx-auto text-center w-full py-20 sm:py-24 relative z-10'>
          <div className='inline-flex items-center justify-center gap-3 px-4 py-1.5 mb-8 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white font-body'>
            <p>New blog every Friday</p>
            <img src={assets.star_icon} className='w-2.5' alt="" />
          </div>

          <h1 className='font-heading text-[48px] sm:text-[64px] md:text-[72px] font-normal leading-[1.1] text-white mb-6'>
            SCRIBE<span className='text-primary italic'></span> <br className='hidden sm:block'/>
          </h1>

          <p className='my-8 sm:my-10 max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-body'>
          - By Yash
          <br />
           A carefully crafted blog where ideas take shape and conversations begin.
           Every post is written and curated with intention.
           
          </p>

          <form
            onSubmit={onSubmitHandler}
            className='flex justify-between max-w-xl mx-auto bg-white rounded-md overflow-hidden shadow-lg'
          >
            <input
              ref={inputRef}
              type="text"
              placeholder='Search for blogs'
              required
              className='w-full pl-4 pr-3 py-2.5 text-base outline-none text-[#111111] font-body'
            />
            <button
              type="submit"
              className='bg-primary text-white px-5 sm:px-6 py-2.5 text-base font-medium cursor-pointer hover:bg-[#1d4ed8] transition-colors duration-150 ease-in-out font-body'
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Clear Search Button - Positioned within hero fade area */}
      <div className='text-center py-6 relative z-10'>
        {
        input && (
          <button
            onClick={onClear}
            className='inline-flex items-center justify-center border border-white/30 bg-white/20 backdrop-blur-sm text-xs py-1.5 px-4 rounded-md text-white hover:bg-white/30 transition-all duration-150 ease-in-out cursor-pointer font-body shadow-lg'
          >
            Clear Search
          </button>
        )
        }
      </div>
    </div>
  )
}

export default Header