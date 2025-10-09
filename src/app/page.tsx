import LandingLeft from '@/components/LandingLeft'
import LandingRight from '@/components/LandingRight'
import { OurProcess } from '@/components/OurProcess'
import React from 'react'

const page = () => {
  return (
    <main className="w-full bg-black">
    <div className='w-full relative h-[100dvh]'>
        {/* icon part*/}
        <div className="fixed top-0 left-0 z-30 p-4">
          <img src="/flowerboom.svg" alt="FlowerBoom Logo" width="44" height="44" />
        </div>

        {/* main content */}
    <div className="flex flex-col-reverse lg:flex-row w-full h-full">
     
        {/* left part - FIXED */}
     <LandingLeft />

      {/* right part - SCROLLABLE */}
      <LandingRight />
    </div>
    </div>
      {/* <OurProcess /> */}

    </main>
  )
}

export default page