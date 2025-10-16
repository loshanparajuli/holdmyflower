'use client'

import React, { useState, useEffect } from 'react'
import { OurProcess } from './OurProcess'
import CombinedFeaturedSection from './combined-featured-section'
import { StaggerTestimonials } from './stagger-testimonials'
import SmoothScrollProvider from './SmoothScrollProvider'
import { Faqs } from './FAQs'
import Footer from './Footer'
import Lottie from 'lottie-react'
import loadingAnimation from '../../public/Ai loading model.json'

const LandingRight = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Hide loading animation after a delay to ensure video has buffered
    const timer = setTimeout(() => {
      setIsVideoLoaded(true)
    }, 2200) // 2.2 seconds

    return () => clearTimeout(timer)
  }, [])

  // Remove Lottie from DOM after fade out completes
  const [shouldRenderLottie, setShouldRenderLottie] = useState(true)
  
  useEffect(() => {
    if (isVideoLoaded) {
      // Wait for fade animation to complete before removing from DOM
      const removeTimer = setTimeout(() => {
        setShouldRenderLottie(false)
      }, 500) // Faster fade - 500ms
      return () => clearTimeout(removeTimer)
    }
  }, [isVideoLoaded])

  return (
    <SmoothScrollProvider>
      {/* <Header /> */}
      <div className='text-white flex-1 bg-white'>
        <div className='relative h-screen overflow-hidden'>
          {/* Lottie Loading Animation */}
          {shouldRenderLottie && (
            <div 
              className='absolute inset-0 flex items-center justify-center bg-white z-10 transition-all duration-500 ease-out'
              style={{
                opacity: isVideoLoaded ? 0 : 1,
                filter: isVideoLoaded ? 'blur(10px)' : 'blur(0px)'
              }}
            >
              <Lottie 
                animationData={loadingAnimation} 
                loop={true}
                style={{ width: 300, height: 300 }}
              />
            </div>
          )}
          
          {/* <div className='w-full h-full absolute bg-gradient-to-b from-white/40 to-black/40 pointer-events-none'></div> */}
          <iframe 
            src="https://player.vimeo.com/video/1127750943?badge=0&autopause=0&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0&quality=auto&dnt=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ 
              position: 'absolute', 
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.77vh', // 16:9 aspect ratio
              transform: 'translate(-50%, -50%)',
              border: 'none'
            }}
            title="MazRes"
          />
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