import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-6 my-24 px-4'>
      <div className='elevated-card p-8 md:p-10 max-w-2xl w-full'>
        <h1 className='font-heading text-[32px] sm:text-[40px] md:text-[48px] font-normal text-[#111111] mb-4'>Never Miss a Blog!</h1>
        <p className='text-base sm:text-lg text-[#555555] pb-6 max-w-xl mx-auto leading-relaxed font-body'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
        <form className='flex items-stretch max-w-xl mx-auto w-full gap-0 overflow-hidden rounded-md'>
          <input 
            className='flex-1 min-w-0 px-4 py-2.5 sm:py-3 text-base border border-[#E5E5E3] rounded-l-md outline-none text-[#111111] focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-body bg-white' 
            type="email" 
            placeholder='Enter your email' 
            required
          />
          <button 
            type='submit' 
            className='px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-primary hover:bg-[#1d4ed8] transition-colors duration-150 ease-in-out cursor-pointer rounded-r-md font-body whitespace-nowrap flex-shrink-0'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter