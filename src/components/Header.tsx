import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left - Logo/Brand (optional, can add later) */}
          <div className="flex-1">
            {/* Logo placeholder */}
          </div>

          {/* Right - Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              href="#pricing"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors relative "
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-full mt-5 h-[2px] bg-gradient-to-r bg-black " />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
