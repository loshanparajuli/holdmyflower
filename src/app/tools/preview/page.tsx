"use client"

import React, { useState, useEffect } from "react"
import LandingLeft from '@/components/LandingLeft'
import Image from 'next/image'
import Link from 'next/link'

// Type for video object
type Video = {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  uploadedAt: string;
  duration: string;
};

// Function to generate related videos based on video title/topic
const generateRelatedVideos = (_videoTitle: string, _channelName: string) => {
  // Real video IDs from diverse popular channels with reliable thumbnail URLs
  const allVideos = [
    // Veritasium
    {
      thumbnail: "https://i.ytimg.com/vi/LKp2gikIkD8/sddefault.jpg",
      title: "The Man Who Accidentally Killed The Most People In History",
      channel: "Veritasium",
      views: "12M",
      uploadedAt: "2 weeks ago",
      duration: "18:42"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/pTn6Ewhb27k/sddefault.jpg",
      title: "What If You Never Washed Your Hands?",
      channel: "Veritasium",
      views: "8.5M",
      uploadedAt: "1 month ago",
      duration: "14:33"
    },
    // Johnny Harris
    {
      thumbnail: "https://i.ytimg.com/vi/hhMAt3BluAU/sddefault.jpg",
      title: "Why Switzerland Has 374,142 Bunkers (and likely more)",
      channel: "Johnny Harris",
      views: "3.2M",
      uploadedAt: "2 weeks ago",
      duration: "14:32"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/AbIQGLyz9-M/sddefault.jpg",
      title: "How the US Stole the Middle East",
      channel: "Johnny Harris",
      views: "2.8M",
      uploadedAt: "3 weeks ago",
      duration: "22:15"
    },
    // Fern
    {
      thumbnail: "https://i.ytimg.com/vi/HNtCj4P8jGM/sddefault.jpg",
      title: "The REAL Reason McDonalds Ice Cream Machines Are Always Broken",
      channel: "Fern",
      views: "5.2M",
      uploadedAt: "1 week ago",
      duration: "16:28"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/ZTOP3z0H5n4/sddefault.jpg",
      title: "Why You Can't Travel Between Hawaii's Islands by Boat",
      channel: "Fern",
      views: "3.8M",
      uploadedAt: "2 weeks ago",
      duration: "13:52"
    },
    // Vox
    {
      thumbnail: "https://i.ytimg.com/vi/jbkSRLYSojo/sddefault.jpg",
      title: "How America became a superpower",
      channel: "Vox",
      views: "15M",
      uploadedAt: "1 month ago",
      duration: "11:48"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/tlI022aUWQQ/sddefault.jpg",
      title: "Why no aquarium has a great white shark",
      channel: "Vox",
      views: "18M",
      uploadedAt: "2 months ago",
      duration: "9:22"
    },
    // MrBeast
    {
      thumbnail: "https://i.ytimg.com/vi/0e3GPea1Tyg/sddefault.jpg",
      title: "$1 vs $500,000 Plane Ticket!",
      channel: "MrBeast",
      views: "89M",
      uploadedAt: "3 days ago",
      duration: "16:07"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/kX3nB4PpJko/sddefault.jpg",
      title: "I Built Willy Wonka's Chocolate Factory!",
      channel: "MrBeast",
      views: "125M",
      uploadedAt: "1 week ago",
      duration: "19:43"
    },
    // The Nepali Comment
    {
      thumbnail: "https://i.ytimg.com/vi/T8ADheFgBQo/sddefault.jpg",
      title: "How Nepal's Internet Actually Works",
      channel: "The Nepali Comment",
      views: "425K",
      uploadedAt: "1 week ago",
      duration: "12:15"
    },
    // Dodford
    {
      thumbnail: "https://i.ytimg.com/vi/bisRG_eGRpQ/sddefault.jpg",
      title: "i wrote a song using only your comments",
      channel: "Dodford",
      views: "856K",
      uploadedAt: "5 days ago",
      duration: "8:32"
    },
  ]

  // Return all videos (will be shuffled when displayed)
  return allVideos
}

export default function Page() {
  const [_thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null)
  const [channelName, setChannelName] = useState("")
  const [videoTitle, setVideoTitle] = useState("")
  const [views, setViews] = useState("")
  const [uploadDate, setUploadDate] = useState("")
  const [relatedVideos, setRelatedVideos] = useState(generateRelatedVideos("", ""))
  const [showHomeFeed, setShowHomeFeed] = useState(false)

  useEffect(() => {
    // Update related videos when title changes
    setRelatedVideos(generateRelatedVideos(videoTitle, channelName))
  }, [videoTitle, channelName])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setThumbnailFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubscribe = () => {
    setShowHomeFeed(true)
    // Smooth scroll to home feed section
    setTimeout(() => {
      const feedElement = document.getElementById('home-feed')
      if (feedElement) {
        feedElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <>
    <main className="w-full bg-background text-foreground">
      <div className='w-full relative'>
        {/* small top-left logo like homepage */}
        <Link href="/" className="fixed top-0 left-0 z-30 p-4 mix-blend-difference cursor-pointer">
          <Image src="/flowerboom.svg" alt="FlowerBoom Logo" width={44} height={44} style={{ mixBlendMode: 'difference' }} />
        </Link>

        <div className="flex flex-col-reverse lg:flex-row w-full min-h-[100dvh]">
          {/* left - reuse LandingLeft with forced black background for premium look - STICKY */}
          <div className="w-full max-w-[500px] mx-auto lg:flex-shrink-0 bg-black lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
            <LandingLeft />
          </div>

          {/* right - YouTube-style interface with light mode */}
          <div className="flex-1 w-full overflow-y-auto bg-white flex items-start justify-center">
            <div className="w-full max-w-[1000px] p-6">
              
              {/* Main Video Section */}
              <div className="w-full">
                
                {/* Video Player Mockup */}
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden mb-4 relative">
                  {thumbnailPreview ? (
                    <img 
                      src={thumbnailPreview} 
                      alt="Your thumbnail" 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <div className="text-6xl mb-4">▶</div>
                        <p>Upload thumbnail to preview</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info Section */}
                <div className="mb-4">
                  <h1 className="text-xl font-semibold text-gray-900 mb-2">
                    {videoTitle || "Your Video Title Will Appear Here"}
                  </h1>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{views || "0"} views</span>
                      <span>{uploadDate || "Upload date"}</span>
                    </div>
                  </div>
                </div>

                {/* Channel Info */}
                <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {channelName ? channelName.charAt(0).toUpperCase() : "Y"}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-semibold">
                      {channelName || "Your Channel Name"}
                    </h3>
                    <p className="text-xs text-gray-600">1.2M subscribers</p>
                  </div>
                  <button 
                    onClick={handleSubscribe}
                    className="px-6 py-2 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
                    style={{ background: 'linear-gradient(90deg,#ff8a00,#ff5e00)' }}
                  >
                    See how it compares
                  </button>
                </div>

                {/* Input Form - Compact version below video */}
                <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl space-y-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Edit Video Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm text-gray-700 font-medium">Upload Thumbnail</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white file:cursor-pointer hover:file:bg-orange-600"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-700 font-medium">Channel Name</label>
                      <input
                        type="text"
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        placeholder="Your channel"
                        className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 outline-none text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm text-gray-700 font-medium">Video Title</label>
                      <input
                        type="text"
                        value={videoTitle}
                        onChange={(e) => setVideoTitle(e.target.value)}
                        placeholder="Amazing video title"
                        className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 outline-none text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-700 font-medium">Views</label>
                      <input
                        type="text"
                        value={views}
                        onChange={(e) => setViews(e.target.value)}
                        placeholder="1.2M"
                        className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 outline-none text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-700 font-medium">Upload Date</label>
                      <input
                        type="text"
                        value={uploadDate}
                        onChange={(e) => setUploadDate(e.target.value)}
                        placeholder="2 days ago"
                        className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 outline-none text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Home Feed Section - Shows after Subscribe */}
                {showHomeFeed && (
                  <div id="home-feed" className="mt-8 pt-8 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Home Feed Preview</h2>
                    <p className="text-sm text-gray-600 mb-6">
                      Your thumbnail is randomly placed among these popular videos. Can you spot it?
                    </p>

                    {/* YouTube Home Grid - 4 rows */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {(() => {
                        // Create your video object
                        const yourVideo = {
                          thumbnail: thumbnailPreview || "https://via.placeholder.com/1280x720/f97316/ffffff?text=Upload+Your+Thumbnail",
                          title: videoTitle || "Your Video Title Here",
                          channel: channelName || "Your Channel",
                          views: views || "0",
                          uploadedAt: uploadDate || "Just now",
                          duration: "10:00"
                        }

                        // Shuffle all videos together for completely random placement
                        const allWithYours = [...relatedVideos, yourVideo]
                        const shuffled = allWithYours.sort(() => Math.random() - 0.5)

                        return shuffled.map((video: Video, idx: number) => (
                          <div 
                            key={idx}
                            className="cursor-pointer group"
                          >
                            {/* Thumbnail */}
                            <div className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden mb-3">
                              <img 
                                src={video.thumbnail} 
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                              />
                              {/* Duration badge */}
                              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-semibold">
                                {video.duration}
                              </div>
                            </div>

                            {/* Video Info */}
                            <div className="flex gap-3">
                              {/* Channel avatar */}
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex-shrink-0"></div>
                              
                              {/* Text info */}
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-gray-700">
                                  {video.title}
                                </h3>
                                <p className="text-xs text-gray-600 mb-0.5">{video.channel}</p>
                                <p className="text-xs text-gray-600">
                                  {video.views} views · {video.uploadedAt}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      })()}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
 
    </>
  )
}
