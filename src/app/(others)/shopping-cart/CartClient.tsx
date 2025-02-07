
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Hero from "@/components/OthersHero"
import { useCart } from "@/contexts/CartContext"
import { toast } from "react-hot-toast"

export default function ShoppingCart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const router = useRouter()

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity)
  }

  const handleRemoveItem = (id: string) => {
    removeFromCart(id)
    toast.success("Item removed from cart")
  }

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1) // 10% discount
      toast.success("Coupon applied successfully!")
    } else {
      setDiscount(0)
      toast.error("Invalid coupon code")
    }
  }

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCharges = 30.0
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges

  const handleProceedToCheckout = () => {
    router.push("/checkout")
  }

  return (
    <>
      <Hero heading="Shopping Cart" />
      <div className="bg-gray-50 min-h-screen font-sans">
        <main className="wrapper mx-auto py-8">
          {/* Desktop View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-4 font-semibold">Product</th>
                  <th className="p-4 font-semibold">Price</th>
                  <th className="p-4 font-semibold">Quantity</th>
                  <th className="p-4 font-semibold">Total</th>
                  <th className="p-4 font-semibold">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-4">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="rounded-md object-cover"
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, Number.parseInt(e.target.value) || 0)}
                        className="w-20 text-center"
                        min="0"
                      />
                    </td>
                    <td className="p-4 font-medium">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-xl"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm mb-4 border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700">
                    ×
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Qty:</span>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, Number.parseInt(e.target.value) || 0)}
                      className="w-20 text-center"
                      min="0"
                    />
                  </div>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="mt-8 space-y-6 lg:space-y-0 lg:flex lg:space-x-8">
            {/* Coupon Section */}
            <div className="lg:flex-1">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Have a Coupon?</h2>
                 <p>Enter your Coupon Code for discount!</p>
                 <p>Available coupon code is:&quot;DISCOUNT10&quot;</p>
                <div className="flex space-x-2 mt-2">
                  <Input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-1"
                  />
                  <Button onClick={handleApplyCoupon} className="bg-orange-400 hover:bg-orange-500 active:bg-orange-900">
                    Apply
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-96">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Discount</span>
                    <span>-${(cartSubtotal * discount).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>${shippingCharges.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-gray-200 my-4"></div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <Button onClick={handleProceedToCheckout} className="w-full bg-orange-400 hover:bg-orange-500 active:bg-orange-900 mt-6">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

