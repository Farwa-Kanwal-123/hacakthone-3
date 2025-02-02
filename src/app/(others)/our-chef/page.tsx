// import React from 'react'
// import Hero from "@/components/OthersHero";
// import Chef from "@/components/ourChefPage/Chef";

// const OurChef = () => {
//   return (
//     <div>
//         <Hero heading="Our Chef"/>
//         <Chef/>
//     </div>
//   )
// }

// export default OurChef;






import React from "react";
import Hero from "@/components/OthersHero";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link'

// Define the interface for Chef data
interface IChef {
  _id: string;
  name: string;
  position: string;
  image_url: string;
}

// Fetch chefs dynamically from Sanity
const getChefs = async (): Promise<IChef[]> => {
  const query = `
    *[_type == "chef"] {
      _id,
      name,
      position,
      "image_url": image.asset->url
    }
  `;
  const chefs = await client.fetch(query);
  return chefs;
};

const OurChef = async () => {
  const chefs = await getChefs();

  return (
    <div>
      {/* Render the Hero Section */}
      <Hero heading="Our Chefs" />

      {/* Render the Chef Grid */}
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] space-y-1 my-[50px] md:my-[120px]">
        {chefs.map((chef: IChef) => (
          <div
            className="w-full lg:w-[260px] h-[450px] shadow-lg rounded-lg overflow-hidden"
            key={chef._id}
          >
            {/* Chef Image */}
            <div className="w-full h-[360px] flex justify-center items-center">
              <Image
                src={chef.image_url}
                alt={chef.name}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Chef Info */}
            <div className="flex flex-col items-center w-full bg-gray-50 p-2">
              <h2 className="font-bold text-lg">{chef.name}</h2>
              <p className="text-sm text-gray-600">{chef.position}</p>
              <Link href={`/our-chef/${chef._id}`}><button className="text-[#FF9F0D] inline-block font-semibold">View Details <FaArrowRight className="inline-block text-sm"/></button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurChef;
