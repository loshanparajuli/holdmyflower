export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between py-6 gap-4">
          {/* Left - Copyright */}
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            © 2025 FlowerBoom.
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:reach@buymyflower.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.453 3.578a2.25 2.25 0 0 0-.907 0c-.311.065-.62.227-1.514.724L3.8 7.767l5.955 3.972c1.01.674 1.362.895 1.721.981a2.25 2.25 0 0 0 1.05 0c.358-.086.71-.307 1.722-.982l5.954-3.971l-6.234-3.465c-.893-.497-1.202-.66-1.514-.724m-1.21-1.468a3.75 3.75 0 0 1 1.512 0c.565.117 1.086.406 1.84.826l.1.056l7.308 4.062a.75.75 0 0 1 .386.655v7.02c0 .814 0 1.47-.044 2c-.044.547-.139 1.027-.365 1.471a3.75 3.75 0 0 1-1.639 1.639c-.444.226-.924.32-1.47.365c-.532.044-1.187.044-2 .044H7.128c-.813 0-1.469 0-2-.044c-.546-.044-1.026-.139-1.47-.365a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47c-.043-.532-.043-1.187-.043-2V7.71a.75.75 0 0 1 .385-.656L9.303 2.99q.051-.03.101-.056c.754-.42 1.275-.71 1.84-.826"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/loshanparajuli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
