// // import Link from "next/link"
// // import { Button } from "@/components/ui/button"
// // import Hero from "@/components/OthersHero"

// // export default function SuccessPage() {
// //   const { cartItems, clearCart } = useCart();
// //   const [totalAmount, setTotalAmount] = useState(0);
// //   const [trackingId, setTrackingId] = useState<string | null>(null);
// //   const router = useRouter();

// //   useEffect(() => {
// //     // ✅ Calculate Total Amount
// //     const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
// //     setTotalAmount(total);

// //     // ✅ Clear Cart After Successful Order
// //     clearCart();

// //     // ✅ Redirect to Shop After 5 Seconds
// //     setTimeout(() => {
// //       router.push("/shop");
// //     }, 5000);
// //   }, []);

// //   // ✅ Generate Random Tracking ID
// //   const generateTrackingId = () => {
// //     const id = "TRK" + Math.floor(Math.random() * 1000000);
// //     setTrackingId(id);
// //   };

// //   return (
// //     <>
// //       <Hero heading="🎉 Order Successful!" />
// //       <div className="container mx-auto px-6 py-10 flex flex-col items-center">
// //         <motion.div
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="text-center max-w-2xl"
// //         >
// //           <h2 className="text-3xl font-bold text-green-600 mb-4">
// //             🎉 Thank You for Your Purchase!
// //           </h2>
// //           <p className="text-lg text-gray-700">
// //             Your order has been successfully placed. 🎊
// //           </p>
// //         </motion.div>

// //         {/* ✅ Order Summary Box */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.5 }}
// //           className="bg-white shadow-lg rounded-2xl p-6 mt-6 w-full max-w-lg"
// //         >
// //           <h3 className="text-xl font-semibold text-gray-800 mb-3">🛍️ Order Summary</h3>
// //           <ul className="space-y-3">
// //             {cartItems.map((item) => (
// //               <li
// //                 key={item.id}
// //                 className="flex justify-between border-b pb-2 text-gray-700"
// //               >
// //                 <span>{item.name} (x{item.quantity})</span>
// //                 <span className="font-medium">${item.price * item.quantity}</span>
// //               </li>
// //             ))}
// //           </ul>
// //           <h3 className="text-2xl font-bold text-gray-900 mt-4">Total Paid: ${totalAmount}</h3>
// //         </motion.div>

// //         {/* ✅ Generate Tracker Button */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: 0.2 }}
// //           className="mt-6"
// //         >
// //           {trackingId ? (
// //             <p className="text-lg font-semibold text-blue-600">
// //               📦 Tracking ID: {trackingId}
// //             </p>
// //           ) : (
// //             <Button
// //               className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg transition-all"
// //               onClick={generateTrackingId}
// //             >
// //               Generate Tracker
// //             </Button>
// //           )}
// //         </motion.div>

// //         {/* ✅ Track Order Button */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: 0.4 }}
// //           className="mt-4"
// //         >
// //           <Link href="/track-order">
// //             <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg transition-all">
// //               Track Order
// //             </Button>
// //           </Link>
// //         </motion.div>

// //         {/* ✅ Order Delivery Message */}
// //         <motion.p
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: 0.6 }}
// //           className="mt-6 text-lg font-medium text-gray-700"
// //         >
// //           🚚 Ap ka order bohat jald apko mil jaye ga! 🎁
// //         </motion.p>
// //       </div>
// //     </>
// //   );
// // }





"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/OthersHero";

export default function SuccessPage() {
  const { clearCart } = useCart();
  const [totalAmount, setTotalAmount] = useState<number | null>(null);
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id"); // Getting session_id from URL

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      if (!sessionId || totalAmount !== null) return; // Prevent fetching if totalAmount is already set
      try {
        const res = await fetch(`/api/stripe-session?session_id=${sessionId}`);
        const data = await res.json();
        setTotalAmount(data.amount_total / 100); // Stripe amount is in cents
        clearCart(); // Clear cart after payment confirmation
      } catch (error) {
        console.error("Error fetching payment details:", error);
      }
    };

    fetchPaymentDetails();
  }, [sessionId, totalAmount, clearCart]); // Added totalAmount to dependency array

  const generateTrackingId = () => {
    const id = "TRK" + Math.floor(Math.random() * 1000000);
    setTrackingId(id);
  };

  return (
    <div>
      <Hero heading="Order Successful" />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Successful!</h2>
          <p className="text-lg text-gray-700 mb-4">Your order has been placed successfully. 🎊</p>
          
          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🛍️ Order Summary</h3>
            <h3 className="text-2xl font-bold text-gray-900 mt-4">
              Total Paid: {totalAmount !== null ? `$${totalAmount}` : "Fetching..."}
            </h3>
          </div>

          {/* Generate Tracker Button */}
          <div className="mt-6">
            {trackingId ? (
              <p className="text-lg font-semibold text-blue-600">📦 Tracking ID: {trackingId}</p>
            ) : (
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg" onClick={generateTrackingId}>
                Generate Tracker
              </Button>
            )}
          </div>

          {/* Track Order Button */}
          <div className="mt-4">
            <Link href="/track-order">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg">
                Track Order
              </Button>
            </Link>
          </div>

          {/* Delivery Message */}
          <p className="mt-6 text-lg font-medium text-gray-700">🚚 Your order will be delivered soon! 🎁</p>
        </motion.div>
      </div>
    </div>
  );
}
