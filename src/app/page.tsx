import LandingLeft from '@/components/LandingLeft'
import LandingRight from '@/components/LandingRight'
import React from 'react'
import Image from 'next/image'
import { organizationSchema, serviceSchema, webPageSchema } from '@/lib/schema'

const page = () => {
  return (
    <>
      {/* Structured Data for SEO & AI Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      
      <main className="w-full bg-black">
    <div className='w-full relative h-[100dvh]'>
        {/* icon part*/}
        <div className="fixed top-0 left-0 z-30 p-4 mix-blend-difference">
          <Image src="/flowerboom.svg" alt="Hold My Flower Logo" width={44} height={44} style={{ mixBlendMode: 'difference' }} />
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
    </>
  )
}

export default page