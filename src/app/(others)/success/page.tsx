// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import Hero from "@/components/OthersHero"

// export default function SuccessPage() {
//   return (
//     <>
//       <Hero heading="Order Successful" />
//       <div className="container mx-auto px-4 py-8 text-center">
//         <h2 className="text-2xl font-bold mb-4">Thank you for your purchase!</h2>
//         <p className="mb-8">Your order has been successfully processed.</p>
//         <Link href="/shop">
//           <Button className="bg-orange-500 hover:bg-orange-600">Continue Shopping</Button>
//         </Link>
//       </div>
//     </>
//   )
// }








"use client";
import { useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/OthersHero";

export default function SuccessPage() {
  const { clearCart } = useCart(); // ✅ ClearCart ko yahan use karo
  const router = useRouter();

  useEffect(() => {
    clearCart(); // ✅ Order successful hone ke baad cart empty karo

    setTimeout(() => {
      router.push("/shop"); // ✅ 5 sec baad shop par redirect
    }, 5000);
  }, []);

  return (
    <>
      <Hero heading="Order Successful" />
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Thank you for your purchase! 🎉</h2>
        <p className="mb-8">Your order has been successfully processed.</p>
        <Link href="/shop">
          <Button className="bg-orange-500 hover:bg-orange-600">Continue Shopping</Button>
        </Link>
      </div>
    </>
  );
}
