import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],  
  weight: '400',       
  variable: '--font-great-vibes',
});


const Hero = () => {
  return (
    <div className="text-[#FFFFFF]">
    <div className= "md:max-w-[1320px] mx-auto px-3 sm:px-6 gap-8 lg:px-24 xl:px-32 py-8 md:py-12 lg:py-18 flex flex-col md:flex-row md:items-center">
      
      <div className="hidden md:block w-full md:w-[26px]">
        <Image
          src="/bar.png"
          alt="bar"
          width={25.28}
          height={492}
          className="hidden w-full sm:block h-[450px]"
        />
      </div>
      <div className="w-full text-white md:w-[472px] md:h-[356px] flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className={`${greatVibes.className} text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] md:w-[240px] w-full font-normal text-[#FF9F0D] whitespace-nowrap`}>
          Its Quick & Amusing!
        </h1>
        <h2 className="text-[24px] w-full sm:text-[28px] md:text-[36px] lg:text-[50px] md:leading-tight font-bold whitespace-normal mt-3">
          <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
        </h2>
        <p className="text-[12px] md:w-[418px] w-full sm:text-[14px] md:text-[16px] md:leading-4 font-inter mt-4 pr-10 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mt-6">
          <Link href="/menu">
            <button className="bg-[#FF9F0D] text-white w-[100px] sm:w-[130px] md:w-[160px] lg:w-[190px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
              See More
            </button>
          </Link>
        </div>
      </div>
      <div className=" md:mt-0 max-w-[877.8px] max-h-[670px] flex justify-center">
        <Image
          src="/homehero.png"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="w-full h-auto "
        />
      </div>
      </div>
      </div>
  );
};

export default Hero;