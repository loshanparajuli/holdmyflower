"use client"

import React, { useState } from "react"
import LandingLeft from '@/components/LandingLeft'
import Image from 'next/image'
import Link from 'next/link'

const getYouTubeId = (url: string) => {
  try {
    // Support many YouTube URL forms
    const u = new URL(url)
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v") || null
    }
    if (u.hostname === "youtu.be") {
      return u.pathname.slice(1) || null
    }
  } catch {
    return null
  }
  return null
}

const thumbnailUrlsForId = (id: string) => {
  // Order of preference: maxresdefault, sddefault, hqdefault, mqdefault, default
  return [
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${id}/sddefault.jpg`,
    `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${id}/default.jpg`,
  ]
}

export default function Page() {
  const [input, setInput] = useState("")
  const [videoId, setVideoId] = useState<string | null>(null)
  const [currentSrc, setCurrentSrc] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLoad = async () => {
    setError(null)
    setCurrentSrc(null)
    const id = getYouTubeId(input.trim())
    if (!id) {
      setError("Couldn't parse a YouTube video id from that URL")
      setVideoId(null)
      return
    }
    setVideoId(id)
    setLoading(true)
    // Try fallbacks for available thumbnail
    const urls = thumbnailUrlsForId(id)
    let found: string | null = null
    for (const u of urls) {
      try {
        // Use HEAD request to check existence. Some CDNs may not accept HEAD; fallback to GET with range
        const res = await fetch(u, { method: "GET" })
        if (res.ok) {
          // verify it's an image
          const ct = res.headers.get("content-type") || ""
          if (ct.startsWith("image/")) {
            found = u
            break
          }
        }
      } catch {
        // continue trying other sizes
      }
    }
    if (!found) {
      setError("No thumbnail found for this video (private/removed or network issue)")
      setLoading(false)
      return
    }
    setCurrentSrc(found)
    setLoading(false)
  }

  const handleDownload = async () => {
    if (!currentSrc || !videoId) return
    try {
      setLoading(true)
      const res = await fetch(currentSrc)
      if (!res.ok) throw new Error("Failed to fetch image")
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${videoId}.jpg`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch {
      setError("Failed to download image")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="w-full bg-background text-foreground">
      <div className='w-full relative h-[100dvh]'>
        {/* small top-left logo like homepage */}
        <Link href="/" className="fixed top-0 left-0 z-30 p-4 mix-blend-difference cursor-pointer">
          <Image src="/flowerboom.svg" alt="FlowerBoom Logo" width={44} height={44} style={{ mixBlendMode: 'difference' }} />
        </Link>

  <div className="flex flex-col-reverse lg:flex-row w-full h-full">
          {/* left - reuse LandingLeft with forced black background for premium look */}
          <div className="w-full max-w-[500px] mx-auto lg:flex-shrink-0 bg-black">
            <LandingLeft />
          </div>

          {/* right - centered tool UI */}
          <div className="flex-1 w-full flex items-center justify-center p-6">
            <div className="w-full max-w-[900px] bg-card/40 backdrop-blur-md border border-border rounded-xl p-8 shadow-2xl">
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-manrope)'}}>
                YT Thumbnail Downloader
              </h1>
              <p className="text-sm text-gray-300 mb-6 font-medium" style={{ fontFamily: 'var(--font-manrope)'}}>
                Paste a YouTube link to preview and download the highest resolution thumbnail available.
              </p>

              <label className="block mb-2 text-sm">Paste YouTube URL</label>
              <div className="flex gap-3 mb-6">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="https://www.youtube.com/watch?"
                  className="flex-1 px-4 py-3 rounded-lg border bg-white/5 outline-none text-black placeholder:text-gray-400"
                />
                <button
                  onClick={handleLoad}
                  className="px-6 py-3 rounded-lg text-white font-semibold"
                  style={{ background: 'linear-gradient(90deg,#ff8a00,#ff5e00)' }}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Load"}
                </button>
              </div>

              {error && <div className="text-destructive mb-4">{error}</div>}

              <div>
                {currentSrc ? (
                  <div>
                    <div className="mb-3 text-sm" style={{ color: 'rgba(33,33,33,0.8)' }}>Preview (hi-res if available)</div>
                    <div className="w-full border rounded overflow-hidden mb-4">
                      <img src={currentSrc} alt="thumbnail preview" className="w-full h-auto block" />
                    </div>
                    <div className="flex gap-3 items-center justify-center">
                      <button
                        onClick={handleDownload}
                        className="px-6 py-3 rounded-lg text-white font-semibold"
                        style={{ background: 'linear-gradient(90deg,#ff8a00,#ff5e00)' }}
                        disabled={loading}
                      >
                        {loading ? "Downloading..." : "Download"}
                      </button>
                      <a href={currentSrc || '#'} target="_blank" rel="noreferrer" className="text-sm underline font-medium" style={{ color: 'rgba(33,33,33,0.8)' }}>Open in new tab</a>
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">Thumbnail preview will appear here after loading a valid URL.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
