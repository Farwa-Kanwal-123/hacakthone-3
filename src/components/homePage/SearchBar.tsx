// // 'use client'
// // import React, { useState, useEffect } from "react";
// // import { IoSearch } from "react-icons/io5";
// // import { PiHandbagBold } from "react-icons/pi";
// // import Link from "next/link"; // Import Link from Next.js
// // import { client } from "@/sanity/lib/client";

// // interface Chef {
// //   name: string;
// //   position: string;
// //   experience: number;
// //   specialty: string;
// //   available: boolean;
// //   _id: string; // Added _id for routing
// // }

// // interface Food {
// //   name: string;
// //   category: string;
// //   price: number;
// //   originalPrice: number;
// //   tags: string[];
// //   available: boolean;
// //   _id: string; // Added _id for routing
// // }

// // type CombinedData = {
// //   type: "chef" | "food";
// // } & (Chef | Food);

// // const SearchBar = () => {
// //   const [query, setQuery] = useState<string>(""); // Search query state
// //   const [combinedData, setCombinedData] = useState<CombinedData[]>([]); // Combined data from Sanity

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const chefsData: Chef[] = await client.fetch(`*[_type == "chef"]`);
// //         const foodsData: Food[] = await client.fetch(`*[_type == "food"]`);
// //         setCombinedData([
// //           ...chefsData.map((chef) => ({ type: "chef" as const, ...chef })),
// //           ...foodsData.map((food) => ({ type: "food" as const, ...food })),
// //         ]);
// //       } catch (error) {
// //         console.error("Error fetching data from Sanity:", error);
// //       }
// //     }

// //     fetchData();
// //   }, []);

// //   // Filter logic: Match query with multiple fields
// //   const filteredData = combinedData.filter((item) => {
// //     const searchableFields = [
// //       item.name,
// //       item.type === "chef" ? (item as Chef).position : (item as Food).category,
// //       item.type === "chef" ? (item as Chef).specialty : (item as Food).tags?.join(", "),
// //     ];

// //     return searchableFields.some((field) =>
// //       field?.toLowerCase().includes(query.toLowerCase())
// //     );
// //   });

// //   return (
// //     <div className="relative md:flex items-center space-x-6">
// //       <div className="hidden lg:flex items-center rounded-md px-3 py-2 space-x-4">
// //         {/* Search Input */}
// //         <input
// //           type="search"
// //           placeholder="Search food or chef..."
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           className="rounded-full h-[35px] w-[310px] border border-[#FF9F0D] bg-black text-white pl-3 active:border-transparent"
// //         />
// //         <IoSearch className="-translate-x-12 bg-black text-white" />
// //         {/* Shopping Cart Icon */}
// //         <Link href="/shopping-cart">
// //           <PiHandbagBold className="-translate-x-8 bg-black text-white" />
// //         </Link>
// //       </div>

// //       {/* Search Results */}
// //       {query && (
// //         <div className="absolute top-[70px] left-0 bg-white text-black w-[400px] max-h-[300px] overflow-y-auto shadow-lg rounded-md p-4">
// //           {filteredData.length > 0 ? (
// //             filteredData.map((item, index) => (
// //               <Link key={index} href={item.type === "chef" ? `/our-chef/${item._id}` : `/shop-details/${item._id}`}>
// //                 <div className="p-2 border-b border-gray-200 last:border-0 hover:bg-gray-100 cursor-pointer">
// //                   {item.type === "chef" ? (
// //                     <p>
// //                       <strong>Chef:</strong> {item.name} - {(item as Chef).position} ({(item as Chef).specialty})
// //                     </p>
// //                   ) : (
// //                     <p>
// //                       <strong>Food:</strong> {item.name} - {(item as Food).category} (${(item as Food).price})
// //                     </p>
// //                   )}
// //                 </div>
// //               </Link>
// //             ))
// //           ) : (
// //             <p className="text-gray-500">No results found.</p>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SearchBar;



// // 'use client'
// // import React, { useState, useEffect } from "react";
// // import { IoSearch } from "react-icons/io5";
// // import { PiHandbagBold } from "react-icons/pi";
// // import Link from "next/link"; // Import Link from Next.js
// // import { client } from "@/sanity/lib/client";

// // interface Chef {
// //   name: string;
// //   position: string;
// //   experience: number;
// //   specialty: string;
// //   available: boolean;
// //   _id: string; // Added _id for routing
// // }

// // interface Food {
// //   name: string;
// //   category: string;
// //   price: number;
// //   originalPrice: number;
// //   tags: string[];
// //   available: boolean;
// //   _id: string; // Added _id for routing
// // }

// // const SearchBar = () => {
// //   const [query, setQuery] = useState<string>(""); // Search query state
// //   const [combinedData, setCombinedData] = useState<any[]>([]); // Combined data from Sanity

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const chefsData: Chef[] = await client.fetch(`*[_type == "chef"]`);
// //         const foodsData: Food[] = await client.fetch(`*[_type == "food"]`);
// //         setCombinedData([
// //           ...chefsData.map((chef) => ({ type: "chef", ...chef })),
// //           ...foodsData.map((food) => ({ type: "food", ...food })),
// //         ]);
// //       } catch (error) {
// //         console.error("Error fetching data from Sanity:", error);
// //       }
// //     }

// //     fetchData();
// //   }, []);

// //   // Filter logic: Match query with multiple fields
// //   const filteredData = combinedData.filter((item) => {
// //     // If the query is "chef" or "food," filter by type
// //     if (query.toLowerCase() === "chef" || query.toLowerCase() === "food") {
// //       return item.type === query.toLowerCase();
// //     }

// //     // Otherwise, filter by searchable fields
// //     const searchableFields = [
// //       item.name,
// //       item.type === "chef" ? item.position : item.category,
// //       item.type === "chef" ? item.specialty : item.tags?.join(", "),
// //     ];

// //     return searchableFields.some((field) =>
// //       field?.toLowerCase().includes(query.toLowerCase())
// //     );
// //   });

// //   return (
// //     <div className="relative md:flex items-center space-x-6">
// //       <div className="hidden lg:flex items-center rounded-md px-3 py-2 space-x-4">
// //         {/* Search Input */}
// //         <input
// //           type="search"
// //           placeholder="Search..."
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           className="rounded-full h-[35px] w-[310px] border border-[#FF9F0D] bg-black text-white pl-3 active:border-transparent"
// //         />
// //         <IoSearch className="-translate-x-12 bg-black text-white" />
// //         {/* Shopping Cart Icon */}
// //         <a href="/shopping-cart">
// //           <PiHandbagBold className="-translate-x-8 bg-black text-white" />
// //         </a>
// //       </div>

// //       {/* Search Results */}
// //       {query && (
// //         <div className="absolute top-[70px] left-0 bg-white text-black w-[400px] max-h-[300px] overflow-y-auto shadow-lg rounded-md p-4">
// //           {filteredData.length > 0 ? (
// //             filteredData.map((item, index) => (
// //               <Link key={index} href={item.type === "chef" ? `/our-chef/${item._id}` : `/shop-details/${item._id}`}>
// //                 <div className="p-2 border-b border-gray-200 last:border-0 hover:bg-gray-100 cursor-pointer">
// //                   {item.type === "chef" ? (
// //                     <p>
// //                       <strong>Chef:</strong> {item.name} - {item.position} ({item.specialty})
// //                     </p>
// //                   ) : (
// //                     <p>
// //                       <strong>Food:</strong> {item.name} - {item.category} (${item.price})
// //                     </p>
// //                   )}
// //                 </div>
// //               </Link>
// //             ))
// //           ) : (
// //             <p className="text-gray-500">No results found.</p>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SearchBar;


'use client';
import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import Link from "next/link"; // Import Link from Next.js
import { client } from "@/sanity/lib/client";

// Define Chef interface
interface Chef {
  name: string;
  position: string;
  experience: number;
  specialty: string;
  available: boolean;
  _id: string; // Added _id for routing
}

// Define Food interface
interface Food {
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  available: boolean;
  _id: string; // Added _id for routing
}

// Define a union type for combined data
type CombinedData = (Chef & { type: "chef" }) | (Food & { type: "food" });

const SearchBar = () => {
  const [query, setQuery] = useState<string>(""); // Search query state
  const [combinedData, setCombinedData] = useState<CombinedData[]>([]); // Combined data from Sanity

  useEffect(() => {
    async function fetchData() {
      try {
        const chefsData: Chef[] = await client.fetch(`*[_type == "chef"]`);
        const foodsData: Food[] = await client.fetch(`*[_type == "food"]`);
        setCombinedData([
          ...chefsData.map((chef) => ({ type: "chef" as const, ...chef })),
          ...foodsData.map((food) => ({ type: "food" as const, ...food })),
        ]);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    }

    fetchData();
  }, []);

  // Filter logic: Match query with multiple fields
  const filteredData = combinedData.filter((item) => {
    // If the query is "chef" or "food," filter by type
    if (query.toLowerCase() === "chef" || query.toLowerCase() === "food") {
      return item.type === query.toLowerCase();
    }

    // Otherwise, filter by searchable fields
    const searchableFields = [
      item.name,
      item.type === "chef" ? item.position : item.category,
      item.type === "chef" ? item.specialty : item.tags?.join(", "),
    ];

    return searchableFields.some((field) =>
      field?.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div className="relative md:flex items-center space-x-6">
      <div className="hidden lg:flex items-center rounded-md px-3 py-2 space-x-4">
        {/* Search Input */}
        <input
          type="search"
          placeholder="Search Chef or Food..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-full h-[35px] w-[310px] border border-[#FF9F0D] bg-black text-white pl-3 active:border-transparent"
        />
        <IoSearch className="-translate-x-12 bg-black text-white" />
      </div>

      {/* Search Results */}
      {query && (
        <div className="absolute top-[70px] left-0 bg-white text-black w-[400px] max-h-[300px] overflow-y-auto shadow-lg rounded-md p-4">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <Link key={index} href={item.type === "chef" ? `/our-chef/${item._id}` : `/shop-details/${item._id}`}>
                <div className="p-2 border-b border-gray-200 last:border-0 hover:bg-gray-100 cursor-pointer">
                  {item.type === "chef" ? (
                    <p>
                      <strong>Chef:</strong> {item.name} - {item.position} ({item.specialty})
                    </p>
                  ) : (
                    <p>
                      <strong>Food:</strong> {item.name} - {item.category} (${item.price})
                    </p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;







