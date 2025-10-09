import React from 'react'
import { OurProcess } from './OurProcess'

const LandingRight = () => {
  return (
        <div className='text-white flex-1 h-[50vh] lg:h-full overflow-y-auto'>
        <div className='relative h-screen'>
          <div className='w-full h-full absolute bg-black/40 pointer-events-none'></div>
          <video src="/flowerboomVideo.mp4" className='w-full h-full object-cover' autoPlay loop muted></video>
        </div>
        
        {/* Add more content here to test scrolling */}
        <div className=' bg-gray-900'> 
          <OurProcess />
         </div>
      </div>
    
  )
}

export default LandingRight