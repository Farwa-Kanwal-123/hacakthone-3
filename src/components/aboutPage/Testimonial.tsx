import React from 'react';
import Image from 'next/image';
import { PiQuotesLight } from 'react-icons/pi';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],  
  weight: '400',       
  variable: '--font-great-vibes',
});


const Testimonials = () => {
  return (
    <div className="max-w-[1320px] wrapper mx-auto pt-[20px] pb-12 my-12">
      {/* Title Section */}
      <div className="text-left mb-12 ml-4 sm:ml-8 lg:ml-12">
        <p className={`${greatVibes.className} text-[24px] sm:text-[32px] text-[#FF9F0D]`}>Testimonials</p>
        <h2 className="wrapper font-bold text-3xl sm:text-4xl lg:text-5xl text-black">
          What our clients are saying
        </h2>
      </div>

      {/* Testimonial Content */}
      <div className="flex flex-col items-center text-center pb-8">
        <Image 
          src="/client.png" 
          alt="client image" 
          width={133} 
          height={134} 
          className="rounded-full relative mb-[-50px]"
        />
        <div className="max-w-[45rem] mx-auto  bg-[#ffffff] p-8 rounded-lg shadow-lg">
          <PiQuotesLight size={47} className="text-[#FF9F0D] mt-10 mx-auto mb-4" />
          <p className="leading-5 text-[#4F4F4F] text-lg">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90&#39;s cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny
            pack vaporware. Man bun next level coloring book skateboard four loko
            knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice
            before they sold out gentrify plaid gastropub normcore XOXO 90&#39;s pickled
            jean shorts. Slow-carb next level ethical authentic, scenester sriracha
            forage franzen organic drinking vinegar.
          </p>
          <span className='flex ml-[24%] md:ml-[40%] mt-4 gap-2'>
          <FaStar size={24} className='text-[#FF9F0D]' />
          <FaStar size={24} className='text-[#FF9F0D]' />
          <FaStar size={24} className='text-[#FF9F0D]' />
          <FaStar size={24} className='text-[#FF9F0D]' />
          <CiStar size={24}  />


          </span>
          <h2 className="text-[#333333] font-helvetica  font-bold text-2xl my-4">Alamin Hasan</h2>
          <p className="text-[#828282] text-[16px] font-helvetica ">Food Specialist</p>
        </div>
      </div>
<Image src="/Dot.png" alt="dots" width={86} height={16} className='ml-[35%] md:ml-[47%]'/>
     
    </div>
  );
};

export default Testimonials;