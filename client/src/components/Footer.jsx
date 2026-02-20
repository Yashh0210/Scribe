import React from 'react'

const Footer = () => {
  return (
    <footer className='px-6 md:px-8 lg:px-12 xl:px-16 py-6 border-t border-[#E5E5E3]/70 mt-16'>
      <div className='max-w-3xl mx-auto text-center space-y-1.5'>
        <p className='text-xs sm:text-sm text-[#6B7280] font-body'>
          <span className='font-heading text-sm sm:text-base text-[#4B5563]'>Scribe</span>
          <span className='mx-1 text-[#9CA3AF]'>—</span>
          Collected thoughts, ideas, and things worth remembering.
        </p>
        <p className='text-xs text-[#9CA3AF] font-body'>
          Written slowly, read quietly.
        </p>
        <p className='text-[11px] text-[#9CA3AF] font-body mt-1'>
          © 2026 Yash
        </p>
      </div>
    </footer>
  )
}

export default Footer
