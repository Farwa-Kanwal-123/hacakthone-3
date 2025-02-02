// import { client } from "@/sanity/lib/client"
// import { urlForImage } from "@/sanity/lib/image"
// import Image from "next/image"
// import { notFound } from "next/navigation"
// import { FaUtensils, FaClock, FaStar, FaCheckCircle, FaTimesCircle, FaArrowLeft } from "react-icons/fa"
// import Link from "next/link"

// interface IChefDetail {
//   _id: string
//   name: string
//   position: string
//   experience: number
//   specialty: string
//   image: any
//   description: string
//   available: boolean
// }

// const getChefById = async (id: string): Promise<IChefDetail | null> => {
//   const query = `
//     *[_type == "chef" && _id == $id][0] {
//       _id,
//       name,
//       position,
//       experience,
//       specialty,
//       image,
//       description,
//       available
//     }
//   `
//   return await client.fetch(query, { id })
// }

// export async function generateStaticParams() {
//   const query = `*[_type == "chef"]{ _id }`
//   const chefs = await client.fetch(query)

//   return chefs.map((chef: { _id: string }) => ({
//     id: chef._id,
//   }))
// }

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const chef = await getChefById(params.id)

//   if (!chef) {
//     return {
//       title: "Chef Not Found",
//     }
//   }

//   return {
//     title: `${chef.name} - Chef Details | Our Restaurant`,
//     description: `Learn more about ${chef.name}, ${chef.position} at our restaurant. Specialty: ${chef.specialty}`,
//   }
// }

// export default async function ChefDetailPage({ params }: { params: { id: string } }) {
//   const chef = await getChefById(params.id)

//   if (!chef) {
//     notFound()
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <Link
//         href="/our-chef"
//         className="text-[#FF9F0D] hover:text-blue-800 mb-6 inline-flex items-center transition-colors duration-200"
//       >
//         <FaArrowLeft className="mr-2" />
//         <span>Back to All Chefs</span>
//       </Link>
//       <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
//         <div className="md:flex">
//           <div className="md:flex-shrink-0 relative h-96 md:h-auto md:w-1/2">
//             <Image
//               className="absolute inset-0 w-full h-full object-cover"
//               src={urlForImage(chef.image).url() || "/placeholder.svg"}
//               alt={chef.name}
//               width={600}
//               height={600}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
//             <div className="absolute bottom-0 left-0 p-6 text-white">
//               <h1 className="text-4xl font-bold leading-tight mb-2">{chef.name}</h1>
//               <p className="text-xl">{chef.position}</p>
//             </div>
//           </div>
//           <div className="p-8 md:w-1/2">
//             <div className="mb-6">
//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">Chef Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="flex items-center">
//                   <FaUtensils className="text-indigo-500 mr-3 text-xl" />
//                   <div>
//                     <p className="text-sm text-gray-600">Specialty</p>
//                     <p className="font-medium">{chef.specialty}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <FaClock className="text-indigo-500 mr-3 text-xl" />
//                   <div>
//                     <p className="text-sm text-gray-600">Experience</p>
//                     <p className="font-medium">{chef.experience} years</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <FaStar className="text-yellow-400 mr-3 text-xl" />
//                   <div>
//                     <p className="text-sm text-gray-600">Rating</p>
//                     <p className="font-medium">Master Chef</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   {chef.available ? (
//                     <>
//                       <FaCheckCircle className="text-green-500 mr-3 text-xl" />
//                       <div>
//                         <p className="text-sm text-gray-600">Availability</p>
//                         <p className="font-medium text-green-600">Available for Events</p>
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <FaTimesCircle className="text-red-500 mr-3 text-xl" />
//                       <div>
//                         <p className="text-sm text-gray-600">Availability</p>
//                         <p className="font-medium text-red-600">Not Available</p>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">About {chef.name}</h2>
//               <p className="text-gray-700 leading-relaxed">{chef.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 text-center">
//         <Link
//           href="/contact"
//           className="inline-block bg-[#FF9F0D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
//         >
//           Book {chef.name} for Your Event
//         </Link>
//       </div>
//     </div>
//   )
// }










//^ perfect code

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaUtensils, FaClock, FaStar, FaCheckCircle, FaTimesCircle, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Hero from '@/components/OthersHero'

interface IChefDetail {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  description: string;
  available: boolean;
}

const getChefById = async (id: string): Promise<IChefDetail | null> => {
  const query = `
    *[_type == "chef" && _id == $id][0] {
      _id,
      name,
      position,
      experience,
      specialty,
      image,
      description,
      available
    }
  `;
  return await client.fetch(query, { id });
};

export async function generateStaticParams() {
  const query = `*[_type == "chef"]{ _id }`;
  const chefs = await client.fetch(query);

  return chefs.map((chef: { _id: string }) => ({
    id: chef._id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const chef = await getChefById(params.id);

  if (!chef) {
    return {
      title: "Chef Not Found",
    };
  }

  return {
    title: `${chef.name} - Chef Details | Our Restaurant`,
    description: `Learn more about ${chef.name}, ${chef.position} at our restaurant. Specialty: ${chef.specialty}`,
  };
}

export default async function ChefDetailPage({ params }: { params: { id: string } }) {
  const chef = await getChefById(params.id);

  if (!chef) {
    notFound();
  }

  return (
    <div>
      <Hero heading="Chef Details"/>
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <Link
        href="/our-chef"
        className="text-[#FF9F0D] hover:text-blue-800 mb-8 inline-flex items-center transition-colors duration-200 text-lg font-medium"
      >
        <FaArrowLeft className="mr-2 text-xl" />
        <span>Back to All Chefs</span>
      </Link>

      <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Chef Image Section */}
          {/* Chef Image Section */}
<div className="md:flex-shrink-0 relative h-[500px] md:h-[600px] md:w-1/2">
  <Image
    className="absolute inset-0 w-full h-full object-cover object-center"
    src={urlForImage(chef.image).url() || "/placeholder.svg"}
    alt={chef.name}
    width={800}
    height={800}
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
  <div className="absolute bottom-0 left-0 p-8 text-white">
    <h1 className="text-5xl font-bold leading-tight mb-3">{chef.name}</h1>
    <p className="text-2xl">{chef.position}</p>
  </div>
</div>


          {/* Chef Info Section */}
          <div className="p-10 md:w-1/2">
            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Chef Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <FaUtensils className="text-indigo-500 mr-4 text-2xl" />
                  <div>
                    <p className="text-lg text-gray-600">Specialty</p>
                    <p className="font-medium text-xl">{chef.specialty}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-indigo-500 mr-4 text-2xl" />
                  <div>
                    <p className="text-lg text-gray-600">Experience</p>
                    <p className="font-medium text-xl">{chef.experience} years</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-4 text-2xl" />
                  <div>
                    <p className="text-lg text-gray-600">Rating</p>
                    <p className="font-medium text-xl">Master Chef</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {chef.available ? (
                    <>
                      <FaCheckCircle className="text-green-500 mr-4 text-2xl" />
                      <div>
                        <p className="text-lg text-gray-600">Availability</p>
                        <p className="font-medium text-green-600 text-xl">Available for Events</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <FaTimesCircle className="text-red-500 mr-4 text-2xl" />
                      <div>
                        <p className="text-lg text-gray-600">Availability</p>
                        <p className="font-medium text-red-600 text-xl">Not Available</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">About {chef.name}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{chef.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block bg-[#FF9F0D] text-white font-bold px-8 py-4 text-lg rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          Book {chef.name} for Your Event
        </Link>
      </div>
    </div>
    </div>
  );
}
















