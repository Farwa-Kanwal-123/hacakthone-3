import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa6'
import foodpic1 from "@/../../public/about1.png"
import foodpic2 from "@/../../public/about2.png"
import foodpic3 from "@/../../public/about3.png"
import { Great_Vibes } from 'next/font/google';
import Link from 'next/link'

const greatVibes = Great_Vibes({
  subsets: ['latin'],  
  weight: '400',       
  variable: '--font-great-vibes',
});


function HomeAbout() {
    return (
        <>
            <section className="max-w-[1320px] mx-auto bg-black md:px-[135px] flex flex-col justify-evenly md:gap-2 md:flex-row  md:items-center sm:py-8 md:py-10 lg:py-12">
                {/* Heading */}
                <div className="text-white w-full md:w-[50%] mr-2">
                    <div className='py-12'>
                    <h1 className={`${greatVibes.className} md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes`}>
                        About us
                    </h1>

                    <h1 className="text-[20px] md:text-[50px] font-bold  md:leading-tight whitespace-nowrap md:whitespace-normal">
                        <span className="text-[#FF9F0D]">We</span> Create the best foody
                        product
                    </h1>

                    <p className="text-[10px] md:text-[16px] font-normal leading-4 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
                        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                        consequat.
                    </p>

                    <ul>
                        <li className="text-[10px] md:text-[16px] font-normal mt-5 flex">
                            <span className="mr-[10px]">
                                <FaCheck />
                            </span>{" "}
                            Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </li>
                        <li className="text-[10px] md:text-[16px] font-normal mt-5 flex">
                            <span className="mr-[10px]">
                                <FaCheck />
                            </span>{" "}
                            Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
                        </li>
                        <li className="text-[10px] md:text-[16px] font-normal mt-5 flex">
                            <span className="mr-[10px]">
                                <FaCheck />
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                    </ul>

                  
                       <Link href="/about"> <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[28px] hover:bg-yellow-800">
                            See More
                        </button></Link>
                 
                </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <Image src={foodpic1} alt="Hero Image w-full" width={660} height={330}  className="md:p-6" />
                    <div className="flex flex-col md:flex-row mt-[16px] md:mt-[0] md:px-6">
                        <Image src={foodpic2} alt="Hero Image" className="mr-[16px]" />
                        <Image src={foodpic3} alt="Hero Image"/>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeAbout;




