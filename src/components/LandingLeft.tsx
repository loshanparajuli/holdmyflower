
import React from 'react'

const LandingLeft = () => {
  return (
       <div className='text-white lg:px-10 p-[24px] lg:p-0 lg:pb-10 w-full lg:w-[500px] lg:flex-shrink-0 h-[50vh] lg:h-full flex items-start justify-center sm:items-center lg:items-end'>
        <div className='flex flex-col items-center lg:items-start justify-start gap-4 lg:gap-6'>
          <div className="flex flex-col sm:flex-row sm:gap-2 lg:gap-0 md:flex-col">
            <h1 className='text-[34px] md:text-[64px] lg:text-[64px] font-extrabold whitespace-nowrap leading-9 md:leading-16 lg:leading-16 text-center sm:text-left md:text-center lg:text-left tracking-tighter'>hi. this is {" "} </h1>
            <h1 className='text-[34px] md:text-[64px] lg:text-[64px] font-extrabold leading-9 md:leading-10 lg:leading-16 text-center sm:text-left tracking-tighter'>flowerBOOM.</h1>
          </div>
          <p className='text-md font-medium text-[14px] sm:text-[16px] lg:text-[18px] leading-5 lg:leading-6 text-center md:text-left text-[#9E9E9E]'>we are the creative agency behind the most popular internet content that gets screened watched by thousands if not by couple of millions on the internet.</p>
          <div className='w-full flex flex-col md:flex-row items-center justify-center lg:justify-start gap-2.5 md:gap-4 text-[16px] lg:text-[20px]'>
            <button className='px-[24px] py-[12px] lg:py-[10px] w-full bg-white text-black font-bold cursor-pointer'>case study</button>
            <button className='px-[24px] py-[12px] lg:py-[10px] border border-gray-500/40 w-full text-white font-bold hover:bg-white/10 transition-colors duration-300 cursor-pointer'>book a call</button>
          </div> 
        </div>
      </div>
  )
}

export default LandingLeft