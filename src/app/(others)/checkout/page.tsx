"use client"
import Hero from "@/components/OthersHero";
import Image from "next/image";
// import React, { useState } from "react";
interface Checkout {
  id: number;
  img: string;
  title: string;
  weg: string;
  price: string;
}
export default function CheckoutPage() {
  const data: Checkout[] = [
    {
      id: 1,
      img: "/checkout.png",
      title: "Chicken Tikka Kabab",
      weg: "150 gm net",
      price: "50$",
    },
    {
      id: 2,
      img: "/checkout.png",
      title: "Chicken Tikka Kabab",
      weg: "150 gm net",
      price: "50$",
    },
    {
      id: 3,
      img: "/checkout.png",
      title: "Chicken Tikka Kabab",
      weg: "150 gm net",
      price: "50$",
    },
  ];

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   address1: "",
  //   address2: "",
  //   city: "",
  //   zipCode: "",
  //   country: "",
  // });

  // const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // const subtotal = data.reduce((sum, item) => sum + parseFloat(item.price), 0);
  // const discount = 0.25 * subtotal; // 25% discount
  // const tax = 0.1 * subtotal; // 10% tax
  // const total = subtotal - discount + tax;

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { id, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [id]: value }));
  // };

  // const handlePlaceOrder = () => {
  //   if (!formData.firstName || !formData.email || !formData.phone || !formData.address1) {
  //     alert("Please fill in all required fields!");
  //     return;
  //   }
  //   setIsOrderPlaced(true);
  // };

  return (
    
    <>
    <Hero heading='Checkout Page'/>
    <div className=" lg:max-w-[1920px] w-full px-auto gap-2 ">
     <div className=" lg:max-w-[1320px] w-full flex lg:px-16 flex-col lg:flex-row  py-24">
       
         
        <div className="lg:max-w-[872px] md:px-16 px-4  w-full h-auto">
            <h2 className=" text-xl font-semibold mb-4">Shipping Address</h2>
            

                <div className="w-full gap-2 flex md:flex-row flex-col px-0">
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-orange-500"
                    />
                  </div>
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-orange-500"
                    />
                  </div>
            </div>
            


                <div className="flex flex-col my-4 gap-4 md:flex-row">
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-orange-500"
                    />
                  </div>
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                    />
                  </div>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row">
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                    />
                  </div>
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {" "}
                      Country
                </label>
               <div className="w-[235px]">
                    <select
                      id="country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                    >
                      <option value="" className="w-full px-3">Choose country</option>
                      <option value="us" className="w-full px-3">United States</option>
                      <option value="uk" className="w-full px-3">United Kingdom</option>
                      <option value="ca" className="w-full px-3">Canada</option>
                      <option value="pa" className="w-full px-3">Pakistan</option>
                  </select>
                  </div>
                  </div>
                </div>

                <div className="flex flex-col my-4 md:flex-row gap-4">
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-[#FF9F0D]"
                      placeholder="Choose city"
                    />
                  </div>
                  <div className="md:w-1/2 px-4 w-full">
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Zip code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                    />
                  </div>
            </div>
            <div className="flex flex-col my-4 gap-4 md:flex-row">
            <div className="md:w-1/2 px-4 w-full">
             
                  <label
                    htmlFor="address1"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address 1
                  </label>
                  <input
                    type="text"
                    id="address1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
                <div className="md:w-1/2 px-4 w-full">
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address 2
                  </label>
                  <input
                    type="text"
                    id="address2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
            </div>
              <div>
              </div>
            </div>
            <div className=" md:max-w-[1920px] w-full px-auto   gap-4 ">
            <div className="md:max-w-[872px] my-4 w-full h-auto">
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-[#FF9F0D]"
                />
                <label
                  htmlFor="sameAsShipping"
                  className="text-sm text-gray-700"
                >
                  Same as shipping address
                </label>
              </div>
            <div className="flex flex-col md:flex-row pt-4">
              <button className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F0D] w-72 h-12 px-3">
                Back to cart
              </button>
              <button className="px-6 py-2 bg-[#FF9F0D] text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F0D] w-72 h-12">
                Proceed to shipping
              </button>
            </div>
            </div>
          </div>
          </div>
          <div className="flex-1">
  <div className="py-8 px-6 relative mx-auto  lg:max-w-[424px] w-full rounded-lg border-2 border-gray-300">
    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
    <div className="space-y-6 gap-3 w-full">
      {data.map((item) => (
        <div 
          key={item.id} 
          className="flex gap-4 items-center w-full">
          <div className="relative w-[82px] h-[88px]">
            <Image
              src={item.img}
              alt="Chicken Tikka Kebab"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium md:w-[161px]">
              Chicken Tikka Kebab
            </h3>
            <p className="text-sm text-gray-500">{item.weg}</p>
            <p className="text-sm text-gray-500">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
 
  
           
            <div className="mt-6 w-full space-y-6 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">130$</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium">25%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">54.76$</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">432.65$</span>
              </div>
            </div>
           
            <button className="w-full mt-6 px-6 py-3 bg-[#FF9F0D] text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F0D]">
              Place an order
            </button>
          </div>
          </div>
          </div>
          </div>
          
   </>
  );
}











// "use client";

// import { useState, useEffect } from "react";
// import Hero from "@/components/OthersHero";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ShoppingCartIcon } from "lucide-react";

// // Define types
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// const initialProducts: Product[] = [
//   {
//     id: 1,
//     name: "Vintage Leather Jacket",
//     price: 129.99,
//     image: "/placeholder.svg?height=200&width=200",
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: "Classic Denim Jeans",
//     price: 79.99,
//     image: "/placeholder.svg?height=200&width=200",
//     quantity: 1,
//   },
//   {
//     id: 3,
//     name: "Stylish Sneakers",
//     price: 99.99,
//     image: "/placeholder.svg?height=200&width=200",
//     quantity: 1,
//   },
// ];

// export default function CheckoutPage() {
//   const [products] = useState(initialProducts);
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   // Load cart from local storage
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCartItems(JSON.parse(savedCart));
//     }
//   }, []);

//   // Save cart to local storage
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product: Product) => {
//     const existingItem = cartItems.find((item) => item.id === product.id);
//     if (existingItem) {
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, product]);
//     }
//   };

//   const removeFromCart = (productId: number) => {
//     setCartItems(cartItems.filter((item) => item.id !== productId));
//   };

//   const updateQuantity = (productId: number, quantity: number) => {
//     setCartItems(
//       cartItems.map((item) =>
//         item.id === productId ? { ...item, quantity: Math.max(quantity, 1) } : item
//       )
//     );
//   };

//   const calculateTotal = () => {
//     return cartItems
//       .reduce((total, item) => total + item.price * item.quantity, 0)
//       .toFixed(2);
//   };

//   const handleCheckout = () => {
//     alert("Checkout successful! Thank you for your purchase.");
//     setCartItems([]);
//     localStorage.removeItem("cart");
//   };

//   return (
//     <>
//       <Hero heading="Checkout Page" />
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Product List */}
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-bold mb-4">Available Products</h2>
//             <div className="grid gap-4">
//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   className="flex items-center justify-between border-b pb-2"
//                 >
//                   <div className="flex items-center space-x-4">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                     <div>
//                       <div className="font-medium">{product.name}</div>
//                       <div className="text-gray-500">${product.price.toFixed(2)}</div>
//                     </div>
//                   </div>
//                   <Button onClick={() => addToCart(product)}>Add to Cart</Button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Cart and Checkout */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
//             {cartItems.length === 0 ? (
//               <p className="text-gray-500">Your cart is empty</p>
//             ) : (
//               <div className="space-y-4">
//                 {cartItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center justify-between border-b pb-2"
//                   >
//                     <div className="flex items-center space-x-4">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-12 h-12 object-cover rounded"
//                       />
//                       <div>
//                         <div className="font-medium">{item.name}</div>
//                         <div className="text-gray-500">${item.price.toFixed(2)}</div>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <input
//                         type="number"
//                         value={item.quantity}
//                         min="1"
//                         onChange={(e) =>
//                           updateQuantity(item.id, parseInt(e.target.value))
//                         }
//                         className="w-16 text-center border rounded"
//                       />
//                       <Button
//                         variant="destructive"
//                         onClick={() => removeFromCart(item.id)}
//                       >
//                         Remove
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="mt-4">
//                   <div className="flex justify-between font-semibold text-lg">
//                     <span>Total:</span>
//                     <span>${calculateTotal()}</span>
//                   </div>
//                   <Button
//                     className="mt-4 w-full bg-orange-500 text-white"
//                     onClick={handleCheckout}
//                   >
//                     Proceed to Checkout
//                   </Button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
