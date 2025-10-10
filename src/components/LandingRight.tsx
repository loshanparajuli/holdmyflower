import React from 'react'
import { OurProcess } from './OurProcess'
import CombinedFeaturedSection from './combined-featured-section'
import { StaggerTestimonials } from './stagger-testimonials'
import SmoothScrollProvider from './SmoothScrollProvider'
import { Faqs } from './FAQs'
import Footer from './Footer'

const LandingRight = () => {
  return (
    <SmoothScrollProvider>
      {/* <Header /> */}
      <div className='text-white flex-1 bg-white'>
        <div className='relative h-screen'>
          {/* <div className='w-full h-full absolute bg-gradient-to-b from-white/40 to-black/40 pointer-events-none'></div> */}
          <video src="/flowerboomVideo.mp4" className='w-full h-full object-cover' autoPlay loop muted></video>
        </div>
        
        {/* Add more content here to test scrolling */}
          <OurProcess />
          {/* combined featured section */}
         <CombinedFeaturedSection />
         {/* testimonials */}
         <StaggerTestimonials />
         {/* faq */}
         <Faqs />
         <Footer/>
      </div>
    </SmoothScrollProvider>
  )
}

export default LandingRight