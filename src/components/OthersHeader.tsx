// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { HiMenu } from "react-icons/hi";
// import { IoSearch } from "react-icons/io5";
// import { RxPerson } from "react-icons/rx";
// import { PiHandbagBold } from "react-icons/pi";
// import { client } from "@/sanity/lib/client";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { RiArrowDropDownLine } from "react-icons/ri";

// const Navbar = () => {
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [query, setQuery] = useState<string>(""); // Search query state
//   const [combinedData, setCombinedData] = useState<any[]>([]); // Combined data from Sanity

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // Fetch both chefs and foods
//         const chefsData = await client.fetch(`*[_type == "chef"]`);
//         const foodsData = await client.fetch(`*[_type == "food"]`);

//         // Combine both datasets with their respective types
//         const combined = [
//           ...chefsData.map((chef: any) => ({ type: "chef", ...chef })),
//           ...foodsData.map((food: any) => ({ type: "food", ...food })),
//         ];

//         setCombinedData(combined);
//       } catch (error) {
//         console.error("Error fetching data from Sanity:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   // Filter combined data based on the search query
//   const filteredData = combinedData.filter((item) => {
//     const searchableFields = [
//       item.name,
//       item.type === "chef" ? item.position : item.category,
//       item.type === "chef" ? item.specialty : item.tags?.join(", "),
//     ];

//     return searchableFields.some((field) =>
//       field?.toLowerCase().includes(query.toLowerCase())
//     );
//   });

//   return (
//     <header className="bg-black text-white z-50 sticky">
//       <div className="wrapper flex justify-between items-center py-4">
//         <h1 className="text-2xl font-bold">
//           <span className="text-[#FF9F0D]">Food</span>tuck
//         </h1>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-8 items-center text-white">
//           <Link href={"/"} className="text-[#FF9F0D] underline">
//             Home
//           </Link>
//           <Link href={"/menu"} className="hover:text-[#FF9F0D]">
//             Menu
//           </Link>
//           <Link href={"/blog-page"} className="hover:text-[#FF9F0D]">
//             Blog
//           </Link>
//           <DropdownMenu>
//             <DropdownMenuTrigger className="text-white">
//               Pages
//               <RiArrowDropDownLine className="inline-block" />
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <DropdownMenuLabel className="bg-white hover:text-[#FF9F0D]">
//                 Other Pages
//               </DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>
//                 <Link href="/checkout">Check Out</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Link href="/our-chef">Our Chefs</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Link href="/FAQ">FAQ</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Link href="/404Error">404 Error</Link>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//           <Link href={"/about"} className="hover:text-[#FF9F0D]">
//             About
//           </Link>
//           <Link href={"/shop"} className="hover:text-[#FF9F0D]">
//             Shop
//           </Link>
//           <Link href={"/contact"} className="hover:text-[#FF9F0D]">
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile Menu Trigger */}
//         <div className="md:hidden">
//           <HiMenu className="text-2xl cursor-pointer text-white" />
//         </div>

//         {/* Search and Icons */}
//         <div className="hidden md:flex items-center space-x-6">
//           {/* Search Icon */}
//           <IoSearch
//             className="cursor-pointer text-white"
//             onClick={() => setSearchOpen(!searchOpen)}
//           />
//           {/* RxPerson Icon */}
//           <DropdownMenu>
//             <DropdownMenuTrigger>
//               <RxPerson className="cursor-pointer text-white" />
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <DropdownMenuLabel className="bg-white hover:text-[#FF9F0D]">
//                 Sign In/Sign Up
//               </DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>
//                 <Link href="/signin">Sign In</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Link href="/signup">Sign Up</Link>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//           {/* Shopping Cart */}
//           <Link href="/shopping-cart">
//             <PiHandbagBold className="cursor-pointer text-white" />
//           </Link>
//         </div>
//       </div>

//       {/* Search Overlay */}
//       {searchOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white text-black p-4 shadow-md z-50">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search chefs or foods..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//             {query && (
//               <div className="absolute left-0 mt-2 bg-white border border-gray-200 w-full max-h-60 overflow-y-auto shadow-lg z-10">
//                 {filteredData.length > 0 ? (
//                   filteredData.map((item, index) => (
//                     <Link
//                       key={index}
//                       href={
//                         item.type === "chef"
//                           ? `/our-chef/${item._id}`
//                           : `/shop-details/${item._id}`
//                       }
//                       className="block p-2 hover:bg-gray-100"
//                     >
//                       {item.type === "chef" ? (
//                         <p>
//                           <strong>Chef:</strong> {item.name} - {item.position} (
//                           {item.specialty})
//                         </p>
//                       ) : (
//                         <p>
//                           <strong>Food:</strong> {item.name} - {item.category} (
//                           ${item.price})
//                         </p>
//                       )}
//                     </Link>
//                   ))
//                 ) : (
//                   <p className="p-2 text-gray-500">No results found.</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;












// "use client"
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { HiMenu } from "react-icons/hi";
// import { IoSearch } from "react-icons/io5";
// import { RxPerson } from "react-icons/rx";
// // import { PiHandbagBold } from "react-icons/pi";
// import { useCart } from "@/contexts/CartContext"
// import { client } from "@/sanity/lib/client";
// import CartIcon from "./CartIcon"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { RiArrowDropDownLine } from "react-icons/ri";

// // Define the Chef interface
// interface Chef {
//   name: string;
//   position: string;
//   experience: number;
//   specialty: string;
//   available: boolean;
//   _id: string; // Added _id for routing
// }

// // Define the Food interface
// interface Food {
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   tags: string[];
//   available: boolean;
//   _id: string; // Added _id for routing
// }

// // Define a union type for combined data
// type CombinedData = { type: "chef" } & Chef | { type: "food" } & Food;

// const Navbar = () => {
//   const { cartItems } = useCart();
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
//   const [query, setQuery] = useState<string>(""); // Search query state
//   const [combinedData, setCombinedData] = useState<CombinedData[]>([]); // Combined data from Sanity

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // Fetch both chefs and foods
//         const chefsData: Chef[] = await client.fetch(`*[_type == "chef"]`);
//         const foodsData: Food[] = await client.fetch(`*[_type == "food"]`);

//         // Combine both datasets with their respective types
//         const combined: CombinedData[] = [
//           ...chefsData.map((chef) => ({ type: "chef" as const, ...chef })),
//           ...foodsData.map((food) => ({ type: "food" as const, ...food })),
//         ];

//         setCombinedData(combined);
//       } catch (error) {
//         console.error("Error fetching data from Sanity:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   // Filter combined data based on the search query
//   const filteredData = combinedData.filter((item) => {
//     const searchableFields = [
//       item.name,
//       item.type === "chef" ? item.position : item.category,
//       item.type === "chef" ? item.specialty : item.tags?.join(", "),
//     ];

//     return searchableFields.some((field) =>
//       field?.toLowerCase().includes(query.toLowerCase())
//     );
//   });

//   return (
//     <header className="bg-black text-white z-50 sticky">
//       <div className="wrapper flex justify-between items-center py-4">
//         <h1 className="text-2xl font-bold">
//           <span className="text-[#FF9F0D]">Food</span>tuck
//         </h1>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-8 items-center text-white">
//           <Link href={"/"} className="text-[#FF9F0D] underline">
//             Home
//           </Link>
//           <Link href={"/menu"} className="hover:text-[#FF9F0D]">
//             Menu
//           </Link>
//           <Link href={"/blog-page"} className="hover:text-[#FF9F0D]">
//             Blog
//           </Link>
//           <DropdownMenu>
//             <DropdownMenuTrigger className="text-white">
//               Pages
//               <RiArrowDropDownLine className="inline-block" />
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="bg-white text-black">
//               <DropdownMenuLabel className="bg-white text-black hover:bg-white hover:text-black">
//                 Other Pages
//               </DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
//                 <Link href="/checkout">Check Out</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
//                 <Link href="/our-chef">Our Chefs</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
//                 <Link href="/FAQ">FAQ</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
//                 <Link href="/404Error">404 Error</Link>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//           <Link href={"/about"} className="hover:text-[#FF9F0D]">
//             About
//           </Link>
//           <Link href={"/shop"} className="hover:text-[#FF9F0D]">
//             Shop
//           </Link>
//           <Link href={"/contact"} className="hover:text-[#FF9F0D]">
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile Menu Trigger */}
//         <div className="md:hidden">
//           <HiMenu 
//             className="text-2xl cursor-pointer text-white" 
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
//           />
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {mobileMenuOpen && (
//           <div className="md:hidden absolute top-16 left-0 w-full text-white bg-black p-4 shadow-md z-50">
//             <nav className="flex flex-col space-y-4">
//               <IoSearch
//                 className="cursor-pointer text-white"
//                  onClick={() => setSearchOpen(!searchOpen)}
//                   />
//             <Link href={"/shopping-cart"} className="hover:text-[#FF9F0D]">
//               <CartIcon />
//               </Link>
//               <Link href={"/"} className="text-[#FF9F0D] underline">
//                 Home
//               </Link>
//               <Link href={"/menu"} className="hover:text-[#FF9F0D]">
//                 Menu
//               </Link>
//               <Link href={"/blog-page"} className="hover:text-[#FF9F0D]">
//                 Blog
//               </Link>
//               <Link href={"/about"} className="hover:text-[#FF9F0D]">
//                 About
//               </Link>
//               <Link href={"/shop"} className="hover:text-[#FF9F0D]">
//                 Shop
//               </Link>
//               <Link href={"/contact"} className="hover:text-[#FF9F0D]">
//                 Contact
//               </Link>
              
//             </nav>
//           </div>
//         )}

//         {/* Search and Icons */}
//         <div className="hidden md:flex items-center space-x-6">
//           {/* Search Icon */}
//           <IoSearch
//             className="cursor-pointer text-white"
//             onClick={() => setSearchOpen(!searchOpen)}
//           />
//           {/* RxPerson Icon */}
//           <DropdownMenu>
//             <DropdownMenuTrigger>
//               <RxPerson className="cursor-pointer text-white" />
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="bg-white text-black">
//               <DropdownMenuLabel className="bg-white text-black hover:bg-white hover:text-black">
//                 Sign In/Sign Up
//               </DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
//                 <Link href="/signin">Sign In</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
//                 <Link href="/signup">Sign Up</Link>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* Shopping Cart */}
//           {/* <Link href="/shopping-cart" className="relative">
//             <PiHandbagBold className="cursor-pointer text-white" />
//             {cartItems.length > 0 && (
//               <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#FF9F0D] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                 {cartItems.length}
//               </span>
//             )}
//           </Link> */}
//            <CartIcon />

//         </div>
//       </div>

//       {/* Search Overlay */}
//       {searchOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white text-black p-4 shadow-md z-50">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search chefs or foods..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//             {query && (
//               <div className="absolute left-0 mt-2 bg-white border border-gray-200 w-full max-h-60 overflow-y-auto shadow-lg z-10">
//                 {filteredData.length > 0 ? (
//                   filteredData.map((item, index) => (
//                     <Link
//                       key={index}
//                       href={
//                         item.type === "chef"
//                           ? `/our-chef/${item._id}`
//                           : `/shop-details/${item._id}`
//                       }
//                       className="block p-2 hover:bg-gray-100"
//                     >
//                       {item.type === "chef" ? (
//                         <p>
//                           <strong>Chef:</strong> {item.name} - {item.position} (
//                           {item.specialty})
//                         </p>
//                       ) : (
//                         <p>
//                           <strong>Food:</strong> {item.name} - {item.category} (
//                           ${item.price})
//                         </p>
//                       )}
//                     </Link>
//                   ))
//                 ) : (
//                   <p className="p-2 text-gray-500">No results found.</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;












"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
// import { PiHandbagBold } from "react-icons/pi";
import { useCart } from "@/contexts/CartContext"
import { client } from "@/sanity/lib/client";
import CartIcon from "./CartIcon"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiArrowDropDownLine } from "react-icons/ri";

// Define the Chef interface
interface Chef {
  name: string;
  position: string;
  experience: number;
  specialty: string;
  available: boolean;
  _id: string; // Added _id for routing
}

// Define the Food interface
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
type CombinedData = { type: "chef" } & Chef | { type: "food" } & Food;

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
  const [query, setQuery] = useState<string>(""); // Search query state
  const [combinedData, setCombinedData] = useState<CombinedData[]>([]); // Combined data from Sanity

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch both chefs and foods
        const chefsData: Chef[] = await client.fetch(`*[_type == "chef"]`);
        const foodsData: Food[] = await client.fetch(`*[_type == "food"]`);

        // Combine both datasets with their respective types
        const combined: CombinedData[] = [
          ...chefsData.map((chef) => ({ type: "chef" as const, ...chef })),
          ...foodsData.map((food) => ({ type: "food" as const, ...food })),
        ];

        setCombinedData(combined);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    }

    fetchData();
  }, []);

  // Filter combined data based on the search query
  const filteredData = combinedData.filter((item) => {
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
    <header className="bg-black text-white z-50 sticky">
      <div className="wrapper flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">
          <span className="text-[#FF9F0D]">Food</span>tuck
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-white">
          <Link href={"/"} className="text-[#FF9F0D] underline">
            Home
          </Link>
          <Link href={"/menu"} className="hover:text-[#FF9F0D]">
            Menu
          </Link>
          <Link href={"/blog-page"} className="hover:text-[#FF9F0D]">
            Blog
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white">
              Pages
              <RiArrowDropDownLine className="inline-block" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black">
              <DropdownMenuLabel className="bg-white text-black hover:bg-white hover:text-black">
                Other Pages
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
                <Link href="/checkout">Check Out</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
                <Link href="/our-chef">Our Chefs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
                <Link href="/FAQ">FAQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
                <Link href="/404Error">404 Error</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={"/about"} className="hover:text-[#FF9F0D]">
            About
          </Link>
          <Link href={"/shop"} className="hover:text-[#FF9F0D]">
            Shop
          </Link>
          <Link href={"/contact"} className="hover:text-[#FF9F0D]">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <HiMenu 
            className="text-2xl cursor-pointer text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          />
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full text-white bg-black p-4 shadow-md z-50">
            <nav className="flex flex-col space-y-4">
              <IoSearch
                className="cursor-pointer text-white"
                onClick={() => setSearchOpen(!searchOpen)}
              />
              <Link href={"/shopping-cart"} className="hover:text-[#FF9F0D]">
                <CartIcon />
              </Link>
              <Link href={"/"} className="text-[#FF9F0D] underline">
                Home
              </Link>
              <Link href={"/menu"} className="hover:text-[#FF9F0D]">
                Menu
              </Link>
              <Link href={"/blog-page"} className="hover:text-[#FF9F0D]">
                Blog
              </Link>
              <Link href={"/about"} className="hover:text-[#FF9F0D]">
                About
              </Link>
              <Link href={"/shop"} className="hover:text-[#FF9F0D]">
                Shop
              </Link>
              <Link href={"/contact"} className="hover:text-[#FF9F0D]">
                Contact
              </Link>
            </nav>
          </div>
        )}

        {/* Search and Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Icon */}
          <IoSearch
            className="cursor-pointer text-white"
            onClick={() => setSearchOpen(!searchOpen)}
          />
          {/* RxPerson Icon */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <RxPerson className="cursor-pointer text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black">
              <DropdownMenuLabel className="bg-white text-black hover:bg-white hover:text-black">
                Sign In/Sign Up
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
                <Link href="/signin">Sign In</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="bg-white text-black hover:bg-white hover:text-black">
                <Link href="/signup">Sign Up</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shopping Cart */}
          {/* <Link href="/shopping-cart" className="relative">
            <PiHandbagBold className="cursor-pointer text-white" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#FF9F0D] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link> */}
           <CartIcon />

        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black p-4 shadow-md z-50">
          <div className="relative">
            <input
              type="text"
              placeholder="Search chefs or foods..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {query && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-200 w-full max-h-60 overflow-y-auto shadow-lg z-10">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <Link
                      key={index}
                      href={
                        item.type === "chef"
                          ? `/our-chef/${item._id}`
                          : `/shop-details/${item._id}`
                      }
                      className="block p-2 hover:bg-gray-100"
                    >
                      {item.type === "chef" ? (
                        <p>
                          <strong>Chef:</strong> {item.name} - {item.position} (
                          {item.specialty})
                        </p>
                      ) : (
                        <p>
                          <strong>Food:</strong> {item.name} - {item.category} (
                          ${item.price})
                        </p>
                      )}
                    </Link>
                  ))
                ) : (
                  <p className="p-2 text-gray-500">No results found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

