// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { CgSpinner } from "react-icons/cg"

// interface IFood {
//   _id: string
//   name: string
//   category: string
//   price: number
//   originalPrice?: number
//   imageUrl: string
// }

// interface ProductGridProps {
//   products: IFood[]
// }

// export function ProductGrid({ products }: ProductGridProps) {
//   const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

//   const handleImageLoad = (id: string) => {
//     setLoadedImages((prev) => new Set(prev).add(id))
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//       {products.map((food) => (
//         <div key={food._id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[350px]">
//           <div className="relative h-48 w-full bg-gray-200">
//             {!loadedImages.has(food._id) && (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <CgSpinner className="animate-spin text-4xl text-orange-500" />
//               </div>
//             )}
//             <Image
//               src={food.imageUrl}
//               alt={food.name}
//               fill
//               style={{ objectFit: 'cover' }}
//               className={`transition-opacity duration-300 ease-in-out ${
//                 loadedImages.has(food._id) ? "opacity-100" : "opacity-0"
//               }`}
//               onLoad={() => handleImageLoad(food._id)}
//             />
//           </div>
//           <div className="p-1 flex flex-col flex-grow">
//             <h2 className="text-lg font-semibold line-clamp-2">
//               {food.name || <div className="h-5 bg-gray-200 rounded w-3/4"></div>}
//             </h2>
//             <div className="text-sm text-gray-600">
//               {food.category || <div className="h-4 bg-gray-200 rounded w-1/2"></div>}
//             </div>
//             <div className="">
//               <div className="text-lg font-bold text-gray-800">
//                 {food.price ? `$${food.price.toFixed(2)}` : <div className="h-6 bg-gray-200 rounded w-1/3"></div>}
//               </div>
//               {food.originalPrice && (
//                 <p className="text-sm text-red-500 line-through">${food.originalPrice.toFixed(2)}</p>
//               )}
//               <Link href={`/shop/${food._id}`}>
//                 <button className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300 active:bg-orange-900">
//                   Show Details
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }














"use client"

import { useCallback, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CgSpinner } from "react-icons/cg"

interface IFood {
  _id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  imageUrl: string
}

interface ProductGridProps {
  products: IFood[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const handleImageLoad = useCallback((id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id))
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {products.map((food) => (
        <div key={food._id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[350px]">
          <div className="relative h-48 w-full bg-gray-200">
            {!loadedImages.has(food._id) && (
              <div className="absolute inset-0 flex items-center justify-center">
                <CgSpinner className="animate-spin text-4xl text-orange-500" />
              </div>
            )}
            <Image
              src={food.imageUrl}
              alt={`Image of ${food.name}`}
              fill
              style={{ objectFit: 'cover' }}
              className={`transition-opacity duration-300 ease-in-out ${
                loadedImages.has(food._id) ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => handleImageLoad(food._id)}
            />
          </div>
          <div className="p-1 flex flex-col flex-grow">
            <h2 className="text-lg font-semibold line-clamp-2">
              {food.name || <div className="h-5 bg-gray-200 rounded w-3/4"></div>}
            </h2>
            <div className="text-sm text-gray-600">
              {food.category || <div className="h-4 bg-gray-200 rounded w-1/2"></div>}
            </div>
            <div className="">
              <div className="text-lg font-bold text-gray-800">
                {food.price ? formatPrice(food.price) : <div className="h-6 bg-gray-200 rounded w-1/3"></div>}
              </div>
              {food.originalPrice && (
                <p className="text-sm text-red-500 line-through">${food.originalPrice.toFixed(2)}</p>
              )}
              <Link href={`/shop/${food._id}`}>
                <button
                  className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300 active:bg-orange-900"
                  aria-label={`View details of ${food.name}`}
                >
                  Show Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}