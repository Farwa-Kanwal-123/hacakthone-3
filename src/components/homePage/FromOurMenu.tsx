import React from 'react';
import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],  
  weight: '400',       
  variable: '--font-great-vibes',
});


const FromOurMenu = () => {
  return (
    <div className="max-w-[1320px] bg-[#0D0D0D] mx-auto px-4 sm:px-8 lg:px-16 py-12">
      <div className="text-center mb-12">
        <p className={`${greatVibes.className} text-[24px] sm:text-[32px] text-[#FF9F0D]`}>Choose & Pick</p>
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
          <span className="text-[#FF9F0D]">Fr</span>om Our Menu
        </h2>
      </div>
      <div className="flex justify-center mb-12 px-[20]">
        <ul className="flex flex-wrap justify-wrap justify-center px-[20] gap-[1.5rem] md:gap-[6rem] text-white text-sm sm:text-base">
          <li className="text-[#FF9F0D] font-bold">Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Dessert</li>
          <li>Drink</li>
          <li>Snack</li>
          <li>Soups</li>
        </ul>
      </div>

      {/* Menu Content */}
      <div className=" flex flex-col lg:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
        <div className='bg-[url("/bg-plate.png")] w-[515px] h-[406px]'>
          <Image 
            src="/food-plate.png" 
            alt="plate" 
            width={366} 
            height={362} 
            className="p-4 mt-[30px] ml-[60px] max-w-sm sm:max-w-md lg:max-w-lg "
          />
          </div>
        </div>

        {/* Menu Details */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/Lettuce-Leaf.png" 
                  alt="Lettuce Leaf" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Lettuce Leaf</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-[#FF9F0D]">12.5$</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/Fresh-Breakfast.png" 
                  alt="Lettuce Leaf" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Fresh Breakfast</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-[#FF9F0D]">12.5$</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/Mild-Butter.png" 
                  alt="Lettuce Leaf" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mild Butter</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-[#FF9F0D]">12.5$</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/Fresh-Bread.png" 
                  alt="Fresh Breakfast" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Fresh Bread</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">14.5$</p>
              </div>
            </div>
        
          </div>
          {/* Second Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/Glow-Cheese.png" 
                  alt="Mild Butter" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Glow Cheese</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-[#FF9F0D]">12.5$</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/Sllice-Beef.png" 
                  alt="Mild Butter" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Sllice Beef</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-orange-500">12.5$</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/Mushaom-Pizza.png" 
                  alt="Fresh Breakfast" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mushaom Pizza</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-[#FF9F0D]">14.5$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/Mild-Butter.png" 
                  alt="Mild Butter" 
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mild Butter</h3>
                <p className="text-sm text-gray-300">Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className="text-[#FF9F0D]">12.5$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;