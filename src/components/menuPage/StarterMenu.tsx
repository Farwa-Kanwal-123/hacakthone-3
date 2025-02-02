
import { menuItems } from '@/constant/menuPage/StarterMenu';
import { Coffee } from 'lucide-react';
import Heading from '@/components/menuPage/Heading';
import Image from "next/image";

export default function StarterMenu() {
  return (
    <section className="w-full mx-auto md:mt-[120px] px-4 sm:px-6 lg:px-8">
      <div className="wrapper my-10 sm:my-16 md:my-32 flex flex-col md:flex-row gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-8 md:mb-0">
          <Image 
            src="/menu.png" 
            alt="Starter dish" 
            width={448}
            height={626}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Menu Content */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <div className="flex flex-col mb-8">
            <Coffee className="ml-2 text-[#FF9F0D]" size={24} />
            <Heading text="Starter Menu" />
          </div>
          <div className="space-y-6">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}