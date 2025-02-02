import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],  
  weight: '400',       
  variable: '--font-great-vibes',
});


const MeetOurChef = () => {
  return (
    <div className="max-w-[1320px] wrapper flex flex-col items-center justify-center bg-[#0D0D0D] pt-[20px] md:pt-0 md:pb-0 pb-[20px] space-y-12">
    <div className="text-center space-y-4">
  <p className={`${greatVibes.className}  text-[24px] md:text-[32px] font-normal text-[#FF9F0D]`}> Chefs</p>
<h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#FFFFFF]"><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h2>
    </div>

    <div className="w-full grid grid-cols-1 sm:grid-cols-2 px-16 md:px-28 gap-6 lg:grid-cols-4 lg:gap-2 items-center justify-center">
      <div className="flex items-center justify-center">
        <Image
          src="/chef1.png"
          alt="Partner 1"
          width={306}
          height={329}
          className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/chef2.png"
          alt="Partner 2"
          width={306}
          height={329}
          className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/chef3.png"
          alt="Partner 3"
          width={306}
          height={329}
          className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/chef4.png"
          alt="Partner 4"
          width={306}
          height={329}
          className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
        />
      </div>
    </div>
    <button className='w-[100px] h-[30px] md:w-[155px] md:h-[50px] rounded-[25px] border-[1px] text-[#FFFFFF] border-[#FF9F0D]'><Link href="/chef">See More</Link></button>
  </div>
  )
}

export default MeetOurChef;