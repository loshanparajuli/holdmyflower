'use client'

import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    // Detect Safari browser
    const ua = navigator.userAgent.toLowerCase()
    const isSafariBrowser = ua.includes('safari') && !ua.includes('chrome') && !ua.includes('android')
    setIsSafari(isSafariBrowser)
  }, [])

  useEffect(() => {
    if (!scrollRef.current || isSafari) {
      
      return // Skip Lenis for Safari
    }


    // Initialize Lenis with the scroll container
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic - smoother on high refresh
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      infinite: false,
      wrapper: scrollRef.current,
    })

    // Optimized RAF loop with proper time tracking for high refresh rate
    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
    }
  }, [isSafari])

  return <div ref={scrollRef} className="h-full overflow-y-auto scrollbar-hide">{children}</div>
}
