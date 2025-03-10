import React from 'react'
import Image from 'next/image'
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],  
  weight: '400',       
  variable: '--font-great-vibes',
});


const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, Image: "/food1.png", label: "Save 50% on Fast Food" },
    { id: 2, Image: "/food2.png", label: "Delicious Burgers" },
    { id: 3, Image: "/food3.png", label: "Healthy Salads" },
    { id: 4, Image: "/food4.png", label: "Desserts" },
  ];

  return (
    <section className="max-w-[1320px] mx-auto text-white py-16 px-6">
      <div className="wrapper mx-auto text-center">
        {/* Title */}
        <h3 className={`${greatVibes.className} text-[#FF9F0D] text-2xl md:text-4xl font-bold mb-12`}> Food Category</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#FF9F0D]">Choose</span> Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <Image
                src={item.Image}
                alt={item.label}
                width={500}
                height={500}
                className="w-full h-56 object-cover rounded-lg"
              />

              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <span className="text-[#FF9F0D] font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodCategory