import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-white'>
      <div className='animate-spin rounded-full h-12 w-12 border-4 border-t-primary border-[#E5E5E3]'></div>
    </div>
  )
}

export default Loader
