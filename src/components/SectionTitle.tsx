import React from 'react'

type SectionTitleProps = {
  title: string,
  description?: string
}

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
   <div className="max-w-7xl  py-20 px-4 md:px-8 lg:px-10 ">
        <h2 className="text-[34px]  lg:text-[64px] font-extrabold whitespace-nowrap leading-9 tracking-tighter  lg:leading-16 mb-4 text-black dark:text-white max-w-4xl">
          {title}
        </h2>
        <p className=" text-[#9E9E9E] dark:text-neutral-300 text-sm md:text-base max-w-sm">
          {description}
        </p>
      </div>

  )
}

export default SectionTitle

