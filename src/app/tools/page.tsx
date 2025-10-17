"use client"

import React, { useState } from "react"
import LandingLeft from '@/components/LandingLeft'
import Image from 'next/image'
import Link from 'next/link'

export default function ToolsPage() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  const tools = [
    {
      id: 'thumb-downloader',
      title: 'Thumbnail Downloader',
      description: 'Download high-resolution YouTube thumbnails instantly. Just paste the video URL and get the thumbnail.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      ),
      link: '/tools/thumb',
      available: true
    },
    {
      id: 'thumb-compare',
      title: 'Thumbnail Comparison',
      description: 'Preview how your thumbnail looks among popular videos. Compare and optimize your thumbnail design.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      ),
      link: '/tools/preview',
      available: true
    },
    {
      id: 'video-downloader',
      title: '1080p Youtube video downloader',
      description: 'Download YouTube videos in various formats and quality. Full HD, audio-only, and more options.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      ),
      link: '#',
      available: false,
      comingSoon: true
    }
  ]

  return (
    <main className="w-full bg-white text-foreground">
      <div className='w-full relative min-h-screen'>
        {/* small top-left logo */}
        <div className="fixed top-0 left-0 z-30 p-4 mix-blend-difference">
          <Image src="/flowerboom.svg" alt="FlowerBoom Logo" width={44} height={44} style={{ mixBlendMode: 'difference' }} />
        </div>

        <div className="flex flex-col-reverse lg:flex-row w-full min-h-screen">
          {/* left - reuse LandingLeft with forced black background - STICKY */}
          <div className="w-full lg:w-[500px] lg:flex-shrink-0 bg-black lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
            <LandingLeft />
          </div>

          {/* right - Tools listing */}
          <div className="flex-1 w-full overflow-y-auto relative bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Content */}
            <div className="relative flex items-center justify-center min-h-screen py-10 px-6">
              <div className="w-full max-w-[650px]">
                
                {/* Header */}
                <div className="mb-6">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 drop-shadow-sm" style={{ fontFamily: 'var(--font-manrope)' }}>
                    YouTube Tools
                  </h1>
                  <p className="text-sm text-gray-500">
                    Free tools to help you create better YouTube content. More tools are coming along the way!
                  </p>
                </div>

                {/* Tools Grid */}
                <div className="space-y-3">
                  {tools.map((tool) => (
                    <div key={tool.id}>
                      {tool.available ? (
                        <Link 
                          href={tool.link}
                          className="block"
                          onMouseEnter={() => setHoveredTool(tool.id)}
                          onMouseLeave={() => setHoveredTool(null)}
                        >
                          <div className="relative p-3 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg hover:border-orange-500 transition-all duration-300 hover:shadow-lg group">
                            <div className="flex items-start gap-3">
                              {/* Icon */}
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <div className="scale-75">
                                  {tool.icon}
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1">
                                <h2 className="text-base font-semibold text-gray-900 mb-0.5 group-hover:text-orange-600 transition-colors" style={{ fontFamily: 'var(--font-manrope)' }}>
                                  {tool.title}
                                </h2>
                                <p className="text-xs text-gray-600">
                                  {tool.description}
                                </p>
                              </div>

                              {/* Arrow */}
                              <div className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-2 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="5" y1="12" x2="19" y2="12"/>
                                  <polyline points="12 5 19 12 12 19"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div 
                          className="relative cursor-not-allowed block"
                          onMouseEnter={() => setHoveredTool(tool.id)}
                          onMouseLeave={() => setHoveredTool(null)}
                        >
                          <div className="relative p-3 bg-gray-50/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg opacity-60">
                            <div className="flex items-start gap-3">
                              {/* Icon */}
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white flex-shrink-0">
                                <div className="scale-75">
                                  {tool.icon}
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-0.5">
                                  <h2 className="text-base font-semibold text-gray-700" style={{ fontFamily: 'var(--font-manrope)' }}>
                                    {tool.title}
                                  </h2>
                                  {tool.comingSoon && (
                                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-orange-100 text-orange-600">
                                      Coming Soon
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-500">
                                  {tool.description}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Coming Soon Tooltip - Below */}
                          {hoveredTool === tool.id && tool.comingSoon && (
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-20">
                              Coming Soon! Stay tuned
                              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer Note */}
                <div className="mt-6 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-orange-200">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-0.5 drop-shadow-sm" style={{ fontFamily: 'var(--font-manrope)' }}>
                        More Tools Coming Soon
                      </h3>
                      <p className="text-xs text-gray-700 drop-shadow-sm">
                        We&apos;re constantly working on new tools to help YouTube creators succeed.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
