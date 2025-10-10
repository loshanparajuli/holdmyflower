import React from 'react'

type SectionTitleProps = {
  title: string,
  description?: string
}

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
   <div className="max-w-7xl  py-20 px-4 md:px-8 lg:px-10 ">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          {title}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          {description}
        </p>
      </div>

  )
}

export default SectionTitle

// &apos;ve been working on Aceternity for the past 2 years. Here&apos;s
//           a timeline of my journey.