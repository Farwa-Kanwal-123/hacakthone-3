

"use client";
import { useEffect, useState} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { useCart } from "@/contexts/CartContext";

const SuccessPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [totalAmount, setTotalAmount] = useState<number | null>(null);
  const { clearCart } = useCart();

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      if (!sessionId || totalAmount !== null) return;
      try {
        const res = await fetch(`/api/stripe-session?session_id=${sessionId}`);
        const data = await res.json();
        setTotalAmount(data.amount_total / 100);
        localStorage.removeItem("cart"); // Clear local storage cart
        clearCart(); // Clear cart context
      } catch (error) {
        console.error("Error fetching payment details:", error);
      }
    };
    fetchPaymentDetails();
  }, [sessionId, totalAmount, clearCart]);

  return (
    <div className="max-w-[1440px] mx-auto flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-black">Payment Successful!</h2>
        <FaCheckCircle className="text-green-500 text-5xl mx-auto my-4" />
        <p className="text-black">Thank you for your purchase. Your payment has been processed successfully.</p>
        <h3 className="text-2xl font-bold text-gray-900 mt-4">
          Total Paid: {totalAmount !== null ? `$${totalAmount}` : "Fetching..."}
        </h3>
        <button
          onClick={() => router.push("/shipping")}
          className="mt-6 px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 active:bg-orange-900 transition"
        >
          Generate Tracking Number!
        </button>
      </div>
    </div>
  );
};

export default SuccessPageContent