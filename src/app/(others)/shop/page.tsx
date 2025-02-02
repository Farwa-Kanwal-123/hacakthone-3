
// //* fetch data from sanity 
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { CiSearch } from "react-icons/ci";
// import { IoArrowForwardCircleOutline } from "react-icons/io5";
// import { FaStar } from "react-icons/fa6";
// import { CiStar } from "react-icons/ci";
// import { client } from '@/sanity/lib/client';
// import Hero from "@/components/OthersHero";



// const fetchFoods = async () => {
//   const query = `
//     *[_type == "food"] {
//       _id,
//       name,
//       category,
//       price,
//       originalPrice,
//       tags,
//       "imageUrl": image.asset->url,
//       description,
//       available
//     }
//   `;
//   const foods = await client.fetch(query);
//   return foods;
// };

// const OurShop = async () => {
//   const foods = await fetchFoods();

//   interface IFood {
//     _id: string;
//     name: string;
//     category: string;
//     price: number;
//     originalPrice?: number;
//     tags: string[];
//     imageUrl: string;
//     description: string;
//     available: boolean;
//   }

//   return (
//     <>
//       <Hero heading="Our Shop" />
//       <div className="container mt-32 mb-16 flex flex-col md:flex-row gap-8 mx-auto px-4">
//         <div className="md:w-[984px] w-full">
//           <div className="flex flex-col md:flex-row gap-3 ml-4 w-[317]px">
//             <div className="flex w-[332px] ">
//               <label htmlFor="Sort By" className="mt-2 text-[20px] w-[81px]">
//                 Sort By
//               </label>
//               <select className="opacity-30 rounded border border-gray-400 w-[236px] text-[18px] h-12">
//                 <option value="Newest">Newest</option>
//               </select>
//             </div>

//             <div className="flex md:w-[236px] gap-2">
//               <label htmlFor="Show" className="mt-2 text-[20px] w-[64px]">
//                 Show
//               </label>
//               <select className="opacity-30 rounded border border-gray-400 md:w-[236px] text-[18px] h-12">
//                 <option value="Default">Default</option>
//               </select>
//             </div>
//           </div>

//           {/* Food Items List */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//             {foods.map((food:IFood) => (
//               <div key={food._id} className="shadow-md p-4 w-full m-4 rounded-lg">
//                 <Link href={`/products/${food._id}`}>
//                   <Image
//                     src={food.imageUrl}
//                     alt={food.name}
//                     width={312}
//                     height={267}
//                     className="w-full"
//                   />
//                 </Link>
//                 <h2 className="text-xl font-bold p-2 ">{food.name}</h2>
//                 <div className="text-gray-600 pl-2">{food.category}</div>
//                 <div className="text-gray-800 font-bold mt-2">
//                   ${food.price.toFixed(2)}
//                 </div>
//                 {food.originalPrice && (
//                   <p className="text-sm text-red-500 line-through">
//                     ${food.originalPrice.toFixed(2)}
//                   </p>
//                 )}
//                 <Link href={`/shop/${food._id}`}>
//                   <button className="mt-2 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
//                     Show Details
//                   </button>
//                 </Link>
//               </div>
//             ))}
//           </div>

//           <Image
//             src="/images/bar1.png"
//             alt="bar"
//             width={306}
//             height={51}
//             className="md:ml-[32%] ml-[10%] mt-10"
//           />
//         </div>

//         {/* Right Side Filters and Other Information */}
//         <div className="w-[312px] md:h-[418px]">
//           <div className="flex w-[248px] h-[46px] mt-[72px] text-center ">
//             <input
//               type="text"
//               placeholder="Search Product"
//               className="w-full bg-[#ebe2d5] pl-4 text-gray-400"
//             />
//             <CiSearch
//               size={20}
//               className="bg-[#FF9F0D] p-3 text-[#FFFFFF] w-[46px] h-[46px] -translate-x-10"
//             />
//           </div>

//           <ul className="space-y-2">
//             <h2 className="font-helvetica text-[20px] font-bold mt-2">
//               Category
//             </h2>
//             <li>
//               <input type="checkbox" className="font-helvetica text-[18px]" /> Sandwitch
//             </li>
//             <li>
//               <input type="checkbox" className="font-helvetica text-[18px]" /> Burger
//             </li>
//             <li>
//               <input type="checkbox" className="font-helvetica text-[18px]" /> Chicken Chup
//             </li>
//             <li>
//               <input type="checkbox" className="font-helvetica text-[18px]" /> Drink
//             </li>
//             <li>
//               <input type="checkbox" className="font-helvetica text-[18px]" /> Pizza
//             </li>
//             <li>
//               <input type="checkbox" className="font-helvetica text-[18px]" /> Thi
//             </li>
//             <li>
//               <input type="checkbox" className="font-helvetica text-[18px]" /> Non Veg
//             </li>
//             <li>
//               <input type="checkbox" className="font-helvetica text-[18px]" /> Uncategorized
//             </li>
//           </ul>

//           {/* Banner Section */}
//           <div className="bg-[url(/images/shop.png)] p-4 mt-4 bg-cover w-[248px] h-[286px] ">
//             <div className="font-inter font-bold text-[16px] w-[105px] text-[#FFFFFF]">
//               Perfect Taste
//             </div>
//             <h2 className="font-helvetica font-bold text-[20px] w-[181px] text-[#FFFFFF]">
//               Classic Restaurant
//             </h2>
//             <div className="font-helvetica font-bold text-[16px] w-[58px] text-[#FF9F0D]">
//               $45.00
//             </div>
//             <div className="flex gap-2 w-full h-[24px] mt-32">
//               <button className="font-inter text-[16px] text-[#FFFFFF]">
//                 Shop Now
//               </button>
//               <IoArrowForwardCircleOutline
//                 size={20}
//                 className="text-[#FFFFFF] mt-1"
//               />
//             </div>
//           </div>

//           {/* Filter by Price */}
//           <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
//             Filter By Price
//           </h2>
//           <input type="range" className="bg-yellow-300 w-[200px]" />
//           <div className="font-inter text-[17px] text-gray-400 w-[200px] flex justify-between mb-2">
//             <div>From $0 to $8000</div>
//             <div>Filter</div>
//           </div>

//           {/* Latest Products */}
//           <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
//             Latest Products
//           </h2>
//           <div className="w-[252px] mb-2 space-y-2">
//             <div className="flex items-center gap-4">
//               <div className="object-cover w-[72px] h-16 relative">
//                 <Image
//                   src="/images/me4.png"
//                   alt="Fresh Breakfast"
//                   width={100}
//                   height={100}
//                   className="w-[72px] h-[65px]"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-[#333333]">Fresh Breakfast</h3>
//                 <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
//                   <FaStar size={10} className="text-[#FF9F0D]" />
//                   <FaStar size={10} className="text-[#FF9F0D]" />
//                   <CiStar size={10} />
//                   <CiStar size={10} />
//                   <CiStar size={10} />
//                 </div>
//                 <div className="text-orange-500">14.5$</div>
//               </div>
//             </div>
//             {/* Repeat the product cards below as needed */}
//           </div>

//           {/* Product Tags */}
//           <h2 className="font-helvetica text-[20px] font-bold mt-4 mb-2">
//             Product Tags
//           </h2>
//           <div className="w-[225px] h-[24px] gap-2 flex">
//             <div className="font-inter font-bold border-b border-gray-300 text-[16px] hover:text-[#FF9F0D] hover:underline text-[#333333]">
//               Services
//             </div>
//             <div className="font-inter font-bold text-[16px] border-b border-gray-300 hover:text-[#FF9F0D] hover:underline text-[#333333]">
//               Our Menu
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default OurShop;









//^    all functionalities are working

// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { CiSearch } from "react-icons/ci";
// import { IoArrowForwardCircleOutline } from "react-icons/io5";
// import { FaStar } from "react-icons/fa6";
// import { CiStar } from "react-icons/ci";
// import { client } from "@/sanity/lib/client";
// import Hero from "@/components/OthersHero";

// interface IFood {
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   originalPrice?: number;
//   tags: string[];
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// const OurShop = () => {
//   const [foods, setFoods] = useState<IFood[]>([]);
//   const [searchQuery, setSearchQuery] = useState(""); // Search query state
//   const [minPrice, setMinPrice] = useState(0); // Min price filter
//   const [maxPrice, setMaxPrice] = useState(8000); // Max price filter
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // Sort order
//   const [showLimit, setShowLimit] = useState(8); // Show limit for products
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Added state for selected categories

//   // Fetch data from Sanity
//   useEffect(() => {
//     const fetchFoods = async () => {
//       const query = `
//         *[_type == "food"] {
//           _id,
//           name,
//           category,
//           price,
//           originalPrice,
//           tags,
//           "imageUrl": image.asset->url,
//           description,
//           available
//         }
//       `;
//       const data = await client.fetch(query);
//       setFoods(data);
//     };

//     fetchFoods();
//   }, []);

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategories(prev =>
//       prev.includes(category)
//         ? prev.filter(c => c !== category)
//         : [...prev, category]
//     );
//   };

//   const handlePriceFilter = () => {
//     // This function is now handled directly in the filteredProducts
//   };

//   // Filter and sort products
//   const filteredProducts = foods
//     .filter((food) => {
//       const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesPrice = food.price >= minPrice && food.price <= maxPrice;
//       const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(food.category);
//       return matchesSearch && matchesPrice && matchesCategory;
//     })
//     .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price))
//     .slice(0, showLimit); // Apply show limit

//   return (
//     <>
//       <Hero heading="Our Shop" />
//       <div className="container mt-32 mb-16 flex flex-col md:flex-row gap-8 mx-auto px-4">
//         <div className="md:w-[984px] w-full">
//           {/* Sort By and Show Controls */}
//           <div className="flex flex-col md:flex-row gap-3 ml-4 w-[317px]">
//             <div className="flex w-[332px]">
//               <label htmlFor="Sort By" className="mt-2 text-[20px] w-[81px]">
//                 Sort By:
//               </label>
//               <select
//                 value={sortOrder}
//                 onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
//                 className="rounded border border-gray-400 w-[236px] pl-2 text-[18px] h-12"
//               >
//                 <option value="asc">Price: Low to High</option>
//                 <option value="desc">Price: High to Low</option>
//               </select>
//             </div>

//             <div className="flex md:w-[236px] gap-1">
//               <label htmlFor="Show" className="mt-2 text-[20px] w-[64px]">
//                 Show:
//               </label>
//               <select
//                 value={showLimit}
//                 onChange={(e) => setShowLimit(Number(e.target.value))}
//                 className="rounded border pl-2 border-gray-400 md:w-[236px] text-[18px] h-12"
//               >
//                 <option value={4}>Show 4</option>
//                 <option value={8}>Show 8</option>
//                 <option value={12}>Show 12</option>
//               </select>
//             </div>
//           </div>

//           {/* Food Items List */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//             {filteredProducts.map((food) => (
//               <div key={food._id} className="shadow-md p-4 w-full m-4 rounded-lg">
//                 <Link href={`/products/${food._id}`}>
//                   <Image
//                     src={food.imageUrl || "/placeholder.svg"}
//                     alt={food.name}
//                     width={312}
//                     height={267}
//                     className="w-full"
//                   />
//                 </Link>
//                 <h2 className="text-xl font-bold p-2 ">{food.name}</h2>
//                 <div className="text-gray-600 pl-2">{food.category}</div>
//                 <div className="text-gray-800 font-bold mt-2">
//                   ${food.price.toFixed(2)}
//                 </div>
//                 {food.originalPrice && (
//                   <p className="text-sm text-red-500 line-through">
//                     ${food.originalPrice.toFixed(2)}
//                   </p>
//                 )}
//                 <Link href={`/shop/${food._id}`}>
//                   <button className="mt-2 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
//                     Show Details
//                   </button>
//                 </Link>
//               </div>
//             ))}
//           </div>

//           <Image
//             src="/images/bar1.png"
//             alt="bar"
//             width={306}
//             height={51}
//             className="md:ml-[32%] ml-[10%] mt-10"
//           />
//         </div>

//         {/* Right Side Filters and Other Information */}
//         <div className="w-[312px] md:h-[418px]">
//           {/* Search Bar */}
//           <div className="flex w-[248px] h-[46px] mt-[72px] text-center">
//             <input
//               type="text"
//               placeholder="Search Product"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-[#ebe2d5] pl-4 text-gray-400"
//             />
//             <CiSearch
//               size={20}
//               className="bg-[#FF9F0D] p-3 text-[#FFFFFF] w-[46px] h-[46px] -translate-x-10"
//             />
//           </div>

//           {/* Category Filters */}
//           <ul className="space-y-2">
//             <h2 className="text-[20px] font-bold mt-2">
//               Category
//             </h2>
//             {Array.from(new Set(foods.map(food => food.category))).map((category) => (
//               <li key={category}>
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="mr-2"
//                     checked={selectedCategories.includes(category)}
//                     onChange={() => handleCategoryChange(category)}
//                   />
//                   <span className="text-[18px]">{category}</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//           {/* Banner Section */}
//           <div className="bg-[url(/images/shop.png)] p-4 mt-4 bg-cover w-[248px] h-[286px]">
//             <div className="font-inter font-bold text-[16px] w-[105px] text-[#FFFFFF]">
//               Perfect Taste
//             </div>
//             <h2 className="font-helvetica font-bold text-[20px] w-[181px] text-[#FFFFFF]">
//               Classic Restaurant
//             </h2>
//             <div className="font-helvetica font-bold text-[16px] w-[58px] text-[#FF9F0D]">
//               $45.00
//             </div>
//             <div className="flex gap-2 w-full h-[24px] mt-32">
//               <button className="font-inter text-[16px] text-[#FFFFFF]">
//                 Shop Now
//               </button>
//               <IoArrowForwardCircleOutline
//                 size={20}
//                 className="text-[#FFFFFF] mt-1"
//               />
//             </div>
//           </div>

//           {/* Filter by Price */}
//           <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
//             Filter By Price
//           </h2>
//           <input
//             type="range"
//             min={0}
//             max={2000}
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(Number(e.target.value))}
//             className="bg-yellow-300 w-[200px]"
//           />
//           <div className="font-inter text-[17px] text-gray-400 w-[200px] flex justify-between mb-2">
//             <div>From ${minPrice} to ${maxPrice}</div>
//             <button onClick={handlePriceFilter} className="text-[#FF9F0D] hover:underline">Filter</button>
//           </div>

//           {/* Latest Products */}
//           <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
//             Latest Products
//           </h2>
//           <div className="w-[252px] mb-2 space-y-2">
//             <div className="flex items-center gap-4">
//               <div className="object-cover w-[72px] h-16 relative">
//                 <Image
//                   src="/images/me4.png"
//                   alt="Fresh Breakfast"
//                   width={100}
//                   height={100}
//                   className="w-[72px] h-[65px]"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-[#333333]">Fresh Breakfast</h3>
//                 <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
//                   <FaStar size={10} className="text-[#FF9F0D]" />
//                   <FaStar size={10} className="text-[#FF9F0D]" />
//                   <CiStar size={10} />
//                   <CiStar size={10} />
//                   <CiStar size={10} />
//                 </div>
//                 <div className="text-orange-500">14.5$</div>
//               </div>
//             </div>
//             {/* Repeat the product cards below as needed */}
//           </div>

//           {/* Product Tags */}
//           <h2 className="font-helvetica text-[20px] font-bold mt-4 mb-2">
//             Product Tags
//           </h2>
//           <div className="w-[225px] h-[24px] gap-2 flex">
//             <div className="font-inter font-bold border-b border-gray-300 text-[16px] hover:text-[#FF9F0D] hover:underline text-[#333333]">
//               Services
//             </div>
//             <div className="font-inter font-bold text-[16px] border-b border-gray-300 hover:text-[#FF9F0D] hover:underline text-[#333333]">
//               Our Menu
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurShop;














import { Suspense } from "react"
import Hero from "@/components/OthersHero"
import { ShopContent } from "@/components/shop/ShopContent"
import { Loader } from "@/components/Loader"

export default function OurShop() {
  return (
    <>
      <Hero heading="Our Shop" />
      <Suspense fallback={<Loader />}>
        <ShopContent />
      </Suspense>
    </>
  )
}













