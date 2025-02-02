import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Hero = ({heading,}:{heading:string}) => {
  return (
    <div>
      <div className="bg-cover bg-center h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px]  flex items-center justify-center sticky" style={{ backgroundImage: 'url("/hero.png")' }}>
        <div className="flex flex-col justify-center items-center space-y-3">
          <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-wide">{heading}</h1>
          <div className="flex text-white text-[18px] md:text-[22px] space-x-0 md:space-x-1">
            <p>Home</p>
            <span>
              <IoIosArrowForward className="text-white mt-2" />
            </span>
            <span className="text-[#FF9F0D]">{heading}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero;